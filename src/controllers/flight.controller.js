import { pool } from '../db.js';


export const getFlightId = async (req, res) => {
    try {
        const conn = await pool.getConnection();
        const [rows, fields] = await conn.query('SELECT * FROM flight WHERE flight_id = ?', [req.params.flight_id]);
        conn.release();

        if (rows.length > 0) {
            res.send(rows);
        } else {
            res.json({ code: '404', data: {} });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ code: '500', message: 'Internal Server Error' });
    }
}




