const express = require('express');
const mongoose = require('mongoose');
// Iniciando o App
const app = express();

// Iniciando o DB
mongoose.connect(
  'mongodb://localhost:27017/nodeapi',
  { 
    useUnifiedTopology: true,
    useNewUrlParser: true 
  }
);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000);