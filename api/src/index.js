import express from 'express';
import flightRoutes from './routes/flight.routes.js';
import cors from 'cors';



// Inicializaciones
const app = express();

// Configuraciones
app.use(express.json());

app.use(cors());

// Rutas
app.use(flightRoutes);

// Middlewares

app.use((req, res, next) => {
    res.status(404).json({ message: 'Not found' });
});


// Inicialización del servidor
app.listen(3001);
console.log('Server running on port 3001'); 