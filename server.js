const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando o DB
var url = process.env.MONGODB_URI || 'mongodb://localhost:27017/nodeapi';
mongoose.connect(
  url,
  { 
    db: "heroku_k0bh2thk",
    useUnifiedTopology: true,
    useNewUrlParser: true 
  }
);
requireDir('./src/models');

app.use('/', require('./src/routes'));

app.listen(3000);