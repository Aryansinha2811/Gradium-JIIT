import Gig from '../models/gig.model.js';
import mongoose from 'mongoose';

// CREATE GIG
export const createGig = async (req, res) => {
  if (req.user.role !== 'company') {
    return res.status(403).json({ message: 'Only companies can create gigs' });
  }

  try {
    const {
      title,
      description,
      price,
      deliveryTime,
      revisions,
      category,
      subcategory,
      tags,
      media,
      extras,
      currency,
      status,
      location
    } = req.body;

    const gig = new Gig({
      title,
      description,
      price,
      deliveryTime,
      revisions,
      company: req.user._id,
      category,
      subcategory,
      tags,
      media,
      extras,
      currency,
      status,
      location
    });

    await gig.save();
    res.status(201).json({ message: 'Gig created successfully', gig });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL GIGS
export const getGigs = async (req, res) => {
  try {
    const gigs = await Gig.find()
      .populate('company', 'companyName website industry');
    res.status(200).json(gigs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET SINGLE GIG BY ID
export const getGigById = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid gig ID' });
  }

  try {
    const gig = await Gig.findById(id)
      .populate('company', 'companyName website industry');
    if (!gig) {
      return res.status(404).json({ message: 'Gig not found' });
    }
    res.status(200).json(gig);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE GIG
export const deleteGig = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid gig ID' });
  }

  try {
    const gig = await Gig.findById(id);
    if (!gig) return res.status(404).json({ message: 'Gig not found' });
    if (gig.company.toString() !== req.user._id) {
      return res.status(403).json({ message: 'Not authorized to delete this gig' });
    }

    await gig.remove();
    res.status(200).json({ message: 'Gig deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE GIG
export const updateGig = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid gig ID' });
  }

  try {
    const gig = await Gig.findById(id);
    if (!gig) return res.status(404).json({ message: 'Gig not found' });
    if (gig.company.toString() !== req.user._id) {
      return res.status(403).json({ message: 'Not authorized to update this gig' });
    }

    const {
      title,
      description,
      price,
      deliveryTime,
      revisions,
      category,
      subcategory,
      tags,
      media,
      extras,
      currency,
      status,
      location
    } = req.body;

    gig.title = title || gig.title;
    gig.description = description || gig.description;
    gig.price = price || gig.price;
    gig.deliveryTime = deliveryTime || gig.deliveryTime;
    gig.revisions = revisions || gig.revisions;
    gig.category = category || gig.category;
    gig.subcategory = subcategory || gig.subcategory;
    gig.tags = tags || gig.tags;
    gig.media = media || gig.media;
    gig.extras = extras || gig.extras;
    gig.currency = currency || gig.currency;
    gig.status = status || gig.status;
    gig.location = location || gig.location;

    await gig.save();
    res.status(200).json({ message: 'Gig updated successfully', gig });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
