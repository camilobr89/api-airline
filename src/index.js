import express from 'express';
import flightRoutes from './routes/flight.routes.js';
import pingRoutes from './routes/index.routes.js';


const app = express();

app.use(express.json());


app.use(pingRoutes);

app.use(flightRoutes);

app.listen(3000);
console.log('Server running on port 3000'); 