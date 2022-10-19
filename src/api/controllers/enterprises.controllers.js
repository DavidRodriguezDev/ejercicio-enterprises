
const Enterprise = require('../models/enterprises.models'); //Nos traermos el modelo del archivo enterprise.models

const getAllEnterprises = async (request, response) => {
    try {
        
        const allEnterprises = await Enterprise.find().populate('tvs mobiles'); //Cogemos todas las series de nuestro modelo "Enterprise".
        return response.status(200).json(allEnterprises);

    } catch (error) {
        
        return response.status(500).json(error)

    }
}

const getEnterprise = async (request, response) => {
    try {
        
        const {id} = request.params;
        const allEnterprises = await Enterprise.findById(id).populate('tvs mobiles'); //Cogemos todas las Enterprises de nuestro modelo "Enterprise
        return response.status(200).json(allEnterprises);

    } catch (error) {
       
        return response.status(500).json(error)

    }
}

const postNewEnterprise = async (request, response) => {
    try {
        
        const {name, cif, city, tvs, mobiles} = request.body;
        const newEnterprise = new Enterprise({name, cif, city, tvs, mobiles});
        const createdEnterprise = await newEnterprise.save();
        return response.status(201).json(createdEnterprise);

    } catch (error) {
        
        return response.status(500).json(error)

    }
}

const putEnterprise = async (request, response) => {
    try {
        
        const {id} = request.params; //Recogemos de request.params el "id"
        const putEnterprise = new Enterprise(request.body);
        putEnterprise._id = id;

        const enterpriseDb = await Enterprise.findByIdAndUpdate(id, putEnterprise);
        if(!enterpriseDb) { //Para controlar el error si no encuentra en la base de datos.
            
            return response.status(404).json( {message : "Enterprise not found on database."} );

        }

        return response.status(200).json(putEnterprise) //Si no hay error, devuelve el elemento actualizdo.

    } catch (error) {
        
        return response.status(500).json(error)

    }
}

const deleteEnterprise = async (request, response) => {
    try {
        
        const {id} = request.params; //Recogemos de request.params el "id"
        const enterpriseDb = await Enterprise.findByIdAndDelete(id);

        if(!enterpriseDb) {

            return response.status(404).json({ message : "Enterprise not found on database."});

        }

        return response.status(200).json(enterpriseDb);

    } catch (error) {
        
        return response.status(500).json(error)

    }
}


module.exports = {getAllEnterprises, getEnterprise, postNewEnterprise, putEnterprise, deleteEnterprise}; //Exportamos todas las funciones que hemos creado por separado para tener más organizado el código.