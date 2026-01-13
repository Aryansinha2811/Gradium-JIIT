import jwt from 'jsonwebtoken';
import { User, Admin, Student, Company } from '../models/user.model.js';
export const register = async (req, res) => {
  const {
    name,
    email,
    password,
    role,
    dob,
    phone,
    course,
    batch,
    companyName,
    website,
    industry,
    isVerified,
    profileImage
  } = req.body;
  
  const uploadedImage = req.file ? req.file.path : '';

  if (!name || !email || !password || !role) {
    return res.status(400).json({
      message: 'Name, email, password, and role are required'
    });
  }

  try {
    let Model;
    let extraFields = {};

    switch (role) {
      case 'user':
        Model = Student;
        if (!dob || !phone || !course || !batch) {
          return res.status(400).json({
            message: 'dob, phone, course, and batch are required for students'
          });
        }
        extraFields = { dob, phone, course, batch };
        break;

      case 'company':
        Model = Company;
        if (!companyName) {
          return res.status(400).json({
            message: 'companyName is required for companies'
          });
        }
        extraFields = { companyName, website, industry, isVerified };
        break;

      case 'admin':
        Model = Admin;
        if (!dob || !phone) {
          return res.status(400).json({
            message: 'dob and phone are required for admins'
          });
        }
        extraFields = { dob, phone };
        break;

      default:
        return res.status(400).json({ message: 'Invalid role' });
    }

    const user = new Model({
      name,
      email: email.toLowerCase(),
      password,
      role,
      profileImage: uploadedImage || profileImage || '',
      ...extraFields,
    });

    await user.save();

    return res.status(201).json({
      message: 'User registered successfully',
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        message: 'User with this email and role already exists'
      });
    }
    return res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password, role } = req.body;

  if (!email || !password || !role) {
    return res.status(400).json({ message: 'Email, password, and role required' });
  }

  try {
    const user = await User.findOne({ email: email.toLowerCase(), role }).select('+password');

    if (!user) return res.status(404).json({ message: 'User not found' });

    const isMatch = await user.isPasswordCorrect(password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '90d' });

    return res.status(200).json({
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateProfile = async (req, res) => {
  const updates = req.body;
  try {
    const user = await User.findByIdAndUpdate(req.user._id, updates, { new: true, runValidators: true }).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.user._id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    return res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    // Optional: Restrict to admins
    if (req.user.role !== 'admin') return res.status(403).json({ message: 'Forbidden' });

    const users = await User.find().select('-password');
    return res.status(200).json({ users });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
