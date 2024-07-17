const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const pool = new Pool({
    user: 'your_user',
    host: 'your_host',
    database: 'your_dbname',
    password: 'your_password',
    port: 5432,
});

app.use(cors());

app.get('/api/weather', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM weather_data');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
