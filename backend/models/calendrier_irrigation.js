const mongoose = require('mongoose');

const calIrrigSchema = mongoose.Schema({

    duree: {type: Number , require: true},
    etat: {type: Boolean, require: true},

});

module.exports = mongoose.model('CalendrierIrrigation' , calIrrigSchema);