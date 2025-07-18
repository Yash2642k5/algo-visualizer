// server.js
const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = 5000;
const api_pass = "abc123";

app.use(express.static(path.join(__dirname, 'public')));

app.use(cors()); // Allow frontend to call backend
app.use(express.json()); // Parse JSON requests

app.post('/api/:algo', async (req, res) => {
  const { algo } = req.params;
  const { n } = req.query;
  try {
    const response = await fetch(`http://34.131.174.31:8080/${algo}?n=${n}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${api_pass}`,
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
    res.status(500).json({ error: 'Something went wrong' });
  }
})

try {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });
} catch (e) {
  console.error('Wildcard route error:', e);
}


app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Server crashed!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
