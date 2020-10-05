const express = require('express');

const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/tolbi',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req , res) => {
    res.json({message: 'Tout marche bien !!!'});
});

module.exports = app;