import { createPool } from "mysql2/promise";
import dotenv from 'dotenv';

dotenv.config();

export const pool = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});


// Tiempo de espera para mantener la conexión activa en milisegundos
const keepAliveInterval = 4500;

// Función para enviar un ping a la base de datos
async function pingConnections() {
    try {
        const connection = await pool.getConnection();
        try {
            await new Promise((resolve, reject) => {
                connection.ping((error) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve();
                    }
                });
            });
            console.log("Ping a la base de datos exitoso");
        } catch (error) {
            console.error("Error al ejecutar el ping: ", error);
        } finally {
            connection.release();
        }
    } catch (error) {
        console.error("Error al obtener una conexión: ", error);
    }
}

// Ejecuta la función pingConnections cada 'keepAliveInterval' milisegundos
setInterval(pingConnections, keepAliveInterval);


