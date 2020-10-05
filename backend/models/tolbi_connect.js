const mongoose = require('mongoose');

const tolbiConnectSchema = mongoose.Schema({


    autresInfos: {type: String , require: true},

});

module.exports = mongoose.model('TolbiConnect' , tolbiConnectSchema);