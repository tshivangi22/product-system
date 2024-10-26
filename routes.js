const express = require('express');
const router = express.Router();
const pool = require('./db'); // Ensure db.js is also created in the backend directory

// Example GET route
router.get('/products', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM products');
        res.json(result.rows);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
});

module.exports = router;
