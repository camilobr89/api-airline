import { createPool } from "mysql2/promise";
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_USER } from "./config.js";



// Crear una conexión a la base de datos
export const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
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


