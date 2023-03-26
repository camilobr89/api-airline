import express from 'express';
import flightRoutes from './routes/flight.routes.js';
import cors from 'cors';

// Inicializaciones
const app = express();

// Configuraciones
app.use(express.json());

// Middlewares
app.use(cors());

// Rutas
app.use(flightRoutes);


// Inicialización del servidor
app.listen(3001);
console.log('Server running on port 3001'); 