require('dotenv').config();
const express = require('express');
const routes = require('./routes.js');

const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 5000);
console.log(`[INFO] UP ${process.env.PORT || 5000}`);