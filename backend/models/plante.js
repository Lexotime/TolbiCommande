const mongoose = require('mongoose');

const planteSchema = mongoose.Schema({

    kc: {type: Number , require: true},
    etp: {type: Number , require: true},
});

module.exports = mongoose.model('Plante' , planteSchema);