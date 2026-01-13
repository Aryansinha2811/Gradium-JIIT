import mongoose from "mongoose";

const gigSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  slug: {
    type: String,
    unique: true, // for SEO-friendly URLs
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  currency: {
    type: String,
    default: 'USD',
  },
  deliveryTime: {
    type: Number,
    required: true,
    min: 1, // in days
  },
  revisions: {
    type: Number,
    required: true,
    min: 0,
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
    required: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  subcategory: {
    type: String,
    trim: true,
  },
  tags: [{
    type: String,
    trim: true,
  }],
  media: [{
    type: String, // URLs to images/videos
  }],
  extras: [{
    title: { type: String, trim: true },
    price: { type: Number, min: 0 },
    deliveryTime: { type: Number, min: 1 },
  }],
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5,
  },
  reviewsCount: {
    type: Number,
    default: 0,
  },
  views: {
    type: Number,
    default: 0,
  },
  ordersCount: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'paused'],
    default: 'active',
  },
  location: {
    type: String,
    trim: true,
  },
}, { timestamps: true });

// Optional: auto-generate slug from title before saving
gigSchema.pre('save', function (next) {
  if (this.isModified('title')) {
    this.slug = this.title.toLowerCase().replace(/[\s]+/g, '-').replace(/[^\w\-]+/g, '');
  }
  next();
});

export default mongoose.model('Gig', gigSchema);
