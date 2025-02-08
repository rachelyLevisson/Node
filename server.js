const express = require('express')
const axios = require('axios')
const app = express();

const PORT = process.env.PORT || 3000;

// אימות מול Render API
const API_KEY = 'rnd_xmrXh9GTY3ECKGeztnqj2WLwOVy9';

app.get('/services', async (req, res) => {
    try {
        const resp = await axios.get('https://api.render.com/v1/services', {
            headers: {
                Authorization: `Bearer: ${API_KEY}`  
            }
        });
        res.json(resp.data)

    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching data from Render API');
    }
});

// הפעלת השרת
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

