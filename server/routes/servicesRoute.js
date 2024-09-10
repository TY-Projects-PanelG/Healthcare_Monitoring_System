import express from 'express';
import { addService, getAllServices } from '../controllers/services.js';

const router = express.Router();

router.post("/",addService);
router.get("/all",getAllServices);

export default router;