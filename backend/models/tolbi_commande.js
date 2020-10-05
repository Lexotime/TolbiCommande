const mongoose = require('mongoose');

const tolbiCommandeSchema = mongoose.Schema({

    humidite: {type: Number , require: true},
    temperature: {type: Number , require: true},
});

module.exports = mongoose.model('TolbiCommande' , tolbiCommandeSchema);