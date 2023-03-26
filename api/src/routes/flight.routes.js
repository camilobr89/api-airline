import { Router } from 'express';
import { getFlightId } from '../controllers/flight.controller.js';

const router = Router();

// Ruta para obtener los datos de un vuelo específico
router.get('/flights/:flight_id/passengers', getFlightId);

export default router;