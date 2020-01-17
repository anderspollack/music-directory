import mariadb from "mariadb";

const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    connectionLimit: 5
});

const db = pool.getConnection();

export default db;
