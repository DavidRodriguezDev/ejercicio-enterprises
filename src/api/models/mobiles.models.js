const mongoose = require('mongoose') //Requerimos primero mongoose.

const Schema = mongoose.Schema

const mobileSchema = new Schema({

    brand : {type : String},
    capacity : {type : String},
    price : {type : Number},
    image : {type : String}

},{
    timestamps : true
})

const Mobiles = mongoose.model('mobiles', mobileSchema ); //Aquí creamos nuestro modelo de series.

module.exports = Mobiles; //Para exportar el modelo.