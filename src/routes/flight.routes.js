import { Router } from 'express';
import { getFlightId } from '../controllers/flight.controller.js';

const router = Router();


router.get('/flights/:flight_id/passengers', getFlightId);

export default router;