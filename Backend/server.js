// server.js
const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Allow frontend to call backend
app.use(express.json()); // Parse JSON requests

app.post('/api/:algo', async (req, res) => {
  const { algo } = req.params;
  const { n } = req.query;
  try {
    const response = await fetch(`https://recursionvisualizer.onrender.com/${algo}?n=${n}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RECURSION_API_KEY}`,
      },
    });

    if (!response.ok) throw new Error('API error');

    const zipBuffer = await response.buffer();

    res.setHeader('Content-Type', 'application/zip');
    res.send(zipBuffer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.get('/get_contact_key',(req,res) => {
  try{
    const keys = process.env.VITE_WEB3_API_KEY;
    const jsonKey = { key : keys};
    res.send( jsonKey )
  } catch (err) {
    console.error(err)
    res.status(400).json({ error: 'Something went wrong'})
  }
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
