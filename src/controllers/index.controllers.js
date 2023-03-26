import { pool } from '../db.js';

export const getPing = async (req, res) => {
    const conn = await pool.getConnection();
    const [rows, fields] = await conn.query('SELECT * FROM flight');
    conn.release();
    res.send(rows);
    
}