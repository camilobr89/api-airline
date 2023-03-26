import express from 'express';
import flightRoutes from './routes/flight.routes.js';


import cors from 'cors';



const app = express();

app.use(express.json());

app.use(cors());


app.use(flightRoutes);

app.listen(3001);
console.log('Server running on port 3001'); 