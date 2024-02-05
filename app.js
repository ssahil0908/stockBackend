const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for all routes
app.use(cors());

const dotenv=require("dotenv");
dotenv.config();
const port = process.env.PORT || 5000;
app.use(express.json());
const mongoose = require('./config/db');

//routers
const router = require('./routes/route.js')
app.use('/', router);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
