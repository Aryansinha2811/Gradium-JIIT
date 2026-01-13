import { Router } from 'express';
import {
  register,
  login,
  getAllUsers,
  updateProfile,
  deleteUser,
  getProfile
} from '../controllers/user.controller.js';
import auth from '../middleware/auth.middleware.js';
import { authorizeAdmin } from '../middleware/role.middleware.js';
import upload from '../config/upload.js';
const router = Router();
router.post('/register', upload.single('profileImage'), register);
router.post('/login', login);
router.get('/', auth, authorizeAdmin, getAllUsers);
router.get('/profile', auth, getProfile);
router.put('/profile', auth, updateProfile);
router.delete('/profile', auth, deleteUser);
export default router;
