import { pool } from '../db.js';


// export const getFlightId = async (req, res) => {
//     try {
//         const conn = await pool.getConnection();
//         const [rows, fields] = await conn.query('SELECT * FROM flight WHERE flight_id = ?', [req.params.flight_id]);
//         conn.release();

//         if (rows.length > 0) {
//             res.send(rows);
//         } else {
//             res.json({ code: '404', data: {} });
//         }
//     }
//     catch (err) {
//         console.log(err);
//         res.status(500).json({ code: '400', message: 'could not connect to db' });
//     }
// }

export const getFlightId = async (req, res) => {
    try {
        const conn = await pool.getConnection();
        console.log("Conexión exitosa");

        const [flight] = await conn.query('SELECT * FROM flight WHERE flight_id = ?', [req.params.flight_id]);

        if (flight.length > 0) {
            // Consulta para obtener pasajeros y sus tarjetas de embarque para un vuelo específico
            const [passengers] = await conn.query(`
                SELECT p.*, bp.* FROM passenger p
                JOIN boarding_pass bp ON p.passenger_id = bp.passenger_id
                WHERE bp.flight_id = ?`, [req.params.flight_id]);

            // Aquí va la lógica para asignar asientos y otros requisitos
            // ...

            const [seats] = await conn.query('SELECT * FROM seat WHERE airplane_id = ?', [flight[0].airplane_id]);

            function assignSeats(passengersGroup, availableSeats) {
                // Filtra los asientos según el tipo de asiento de los pasajeros en el grupo
                const groupSeatType = passengersGroup[0].seat_type_id;
                const filteredSeats = availableSeats.filter(seat => seat.seat_type_id === groupSeatType);
            
                // Asigna asientos a los pasajeros en el grupo y elimina los asientos asignados de availableSeats
                passengersGroup.forEach(passenger => {
                    const assignedSeat = filteredSeats.shift();
                    passenger.seat_id = assignedSeat.seat_id;
                    availableSeats.splice(availableSeats.indexOf(assignedSeat), 1);
                });
            }

            // Agrupa a los pasajeros por purchase_id
                const passengersByPurchase = {};
                passengers.forEach(passenger => {
                    if (!passengersByPurchase[passenger.purchase_id]) {
                        passengersByPurchase[passenger.purchase_id] = [];
                    }
                    passengersByPurchase[passenger.purchase_id].push(passenger);
                });

                // Asigna asientos a cada grupo de pasajeros
                Object.values(passengersByPurchase).forEach(passengersGroup => {
                    assignSeats(passengersGroup, seats);
                });
     
            






            // Transforma los objetos de los pasajeros en un formato JSON compatible
            const passengersJson = passengers.map(passenger => {
                return {
                    passengerId: passenger.passenger_id,
                    dni: passenger.dni,
                    name: passenger.name,
                    age: passenger.age,
                    country: passenger.country,
                    boardingPassId: passenger.boarding_pass_id,
                    purchaseId: passenger.purchase_id,
                    seatTypeId: passenger.seat_type_id,
                    seatId: passenger.seat_id,
                };
            });

            const response = {
                code: 200,
                data: {
                    flightId: flight[0].flight_id,
                    takeoffDateTime: flight[0].takeoff_date_time,
                    takeoffAirport: flight[0].takeoff_airport,
                    landingDateTime: flight[0].landing_date_time,
                    landingAirport: flight[0].landing_airport,
                    airplaneId: flight[0].airplane_id,
                    passengers: passengersJson,
                },
            };
            res.json(response);
        } else {
            res.json({ code: '404', data: {} });
        }
        conn.release();
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ code: '400', message: 'could not connect to db' });
    }
}



