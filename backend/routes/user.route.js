import express from 'express';
import protect from '../middlewares/user.auth.middleware.js'
const router = express.Router();
import userController from '../controllers/user.controller.js';
const { registerUser, loginUser, getProfile } = userController;
import generateResponse from '../controllers/ai.controller.js';
import { uploadPDF } from '../utils/multer.js';
import { extractPDFText } from '../middlewares/pdf.parse.middleware.js';

router.post('/register', registerUser);
router.post('/login', loginUser);

router.get('/profile', protect, getProfile);

router.post('/generate',uploadPDF, extractPDFText, generateResponse);

export default router;