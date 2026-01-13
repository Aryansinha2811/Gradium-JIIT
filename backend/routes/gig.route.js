import {
  createGig,
  getGigs,
  getGigById,
  deleteGig,
  updateGig,
} from '../controllers/gig.controller.js';
import auth from '../middleware/auth.middleware.js';
import { Router } from 'express';
const router = Router();

router.post('/', auth, createGig);
router.get('/', auth, getGigs);
router.get('/:id', auth, getGigById);
router.delete('/:id', auth, deleteGig);
router.put('/:id', auth, updateGig);
export default router;