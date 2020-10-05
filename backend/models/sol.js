const mongoose = require('mongoose');

const solSchema = mongoose.Schema({

    lf: {type: Number , require : true},
    hcr: {type: Number , require : true},
    hpf: {type: Number , require : true},
    kr: {type: Number , require : true},
    z: {type: Number , require : true},
    daMSable: {type: Number , require : true},
    daMLimon: {type: Number , require : true},
    daMArgile: {type: Number , require : true},
    grSable: {type: Number , require : true},
    grLimon: {type: Number , require : true},
    grArgile: {type: Number , require : true},
});

module.exports = mongoose.model('Sol' , solSchema);