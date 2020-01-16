import mariadb from "mariadb";

const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    connectionLimit: 5
});

async function connectDB() {
    let conn;
    try {
        conn = await pool.getConnection();
        await conn.query("CREATE DATABASE IF NOT EXISTS music-directory");

    } catch (err) {
        throw err;
    } finally {
        if (conn) { conn.release(); } // release to pool
    }
}

export default connectDB;
