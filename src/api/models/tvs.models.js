const mongoose = require('mongoose') //Requerimos primero mongoose.

const Schema = mongoose.Schema

const tvsSchema = new Schema({

    brand : {type : String},
    inches : {type : String},
    price : {type : Number},
    image : {type : String}

},{
    timestamps : true
})

const Tvs = mongoose.model('televisions', tvsSchema ); //Aquí creamos nuestro modelo de series.

module.exports = Tvs; //Para exportar el modelo.