const mongoose = require('mongoose') //Requerimos primero mongoose.

const Schema = mongoose.Schema

const enterpriseSchema = new Schema({

    name : {type : String},
    cif : {type : String},
    city: {type : String},
    tvs : [{type: Schema.Types.ObjectId, ref : 'televisions'}],
    mobiles : [{type: Schema.Types.ObjectId, ref : 'mobiles'}]

},{
    timestamps : true
})

const Enterprise = mongoose.model('enterprise', enterpriseSchema ); //Aquí creamos nuestro modelo de series.

module.exports = Enterprise; //Para exportar el modelo.