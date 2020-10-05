const mongoose = require('mongoose');

const regionSchema = mongoose.Schema({

    nom: {type: String , require: true},
    pluieEff: {type: Number , require: true},

});

module.exports = mongoose.model('Region' , regionSchema);