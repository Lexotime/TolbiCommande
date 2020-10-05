const mongoose = require('mongoose');

const champSchema = mongoose.Schema({

    su: {type: Number , require: true},

});

module.exports = mongoose.model('Champ' , champSchema);