import cloudinary from './cloudinary.config.js';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';

// Cloudinary storage
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'uploads', // optional folder in Cloudinary
    allowed_formats: ['jpg', 'jpeg', 'png', 'pdf'], // allowed file types
    transformation: [{ width: 1000, height: 1000, crop: 'limit' }], // optional
  },
});

const upload = multer({ storage });

export default upload;
