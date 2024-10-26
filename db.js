const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'product_management_DB',
    password: 'SQL',
    port: 5432, // Default PostgreSQL port
});

module.exports = pool;
