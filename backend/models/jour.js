const mongoose = require('mongoose');

const jourSchema = mongoose.Schema({

    timeStamp: {type: Number , require: true},
    heureOuverture: {type: Number , require: true},
    quantiteEau: {type: Number , require: true},
});

module.exports = mongoose.model('Jour' , jourSchema);