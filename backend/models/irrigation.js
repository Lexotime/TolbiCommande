const mongoose = require('mongoose');

const irrigationSchema = mongoose.Schema({

    eff: {type: Number , require: true},
    cus: {type: Number , require: true},
    nbreHP: {type: Number , require: true},
    np: {type: Number , require: true},
    e: {type: Number , require: true},
    E: {type: Number , require: true},
});

module.exports = mongoose.model('Irrigation' , irrigationSchema);