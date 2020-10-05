const mongoose = require('mongoose');

const utilisateurSchema = mongoose.Schema({

    passwd: {type: String , require: true},
    nom: {type: String , require: true},
    prenoms: {type: String , require: true},
    login: {type: String , require: true},
});

module.exports = mongoose.model('Utilisateur' , utilisateurSchema);