import app from './app.js';
import { PORTLISTEN } from './config.js';



// Inicialización del servidor
app.listen(PORTLISTEN);
console.log('Server running on port 3001'); 