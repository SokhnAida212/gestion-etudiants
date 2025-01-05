const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'gestion_universitaire',
    password: 'Passer@1',
    port: 5432,
});

module.exports = pool;
