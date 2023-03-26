import { Router } from 'express';
import { getFlight } from '../controllers/flight.controller.js';

const router = Router();


router.get('/flight', getFlight);

export default router;