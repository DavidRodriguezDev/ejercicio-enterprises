
const Mobiles = require('../models/mobiles.models'); //Nos traermos el modelo del archivo mobiles.models

const getAllMobiles = async (request, response) => {
    try {
        
        const allMobiles = await Mobiles.find(); //Cogemos todas las mobiles de nuestro modelo "Mobiles".
        return response.status(200).json(allMobiles);

    } catch (error) {
        
        return response.status(500).json(error)

    }
}

const getMobile = async (request, response) => {
    try {
        
        const {id} = request.params;
        const allMobiles = await Mobiles.findById(id); //Cogemos todas las Mobiles de nuestro modelo "Mobile
        return response.status(200).json(allMobiles);

    } catch (error) {
       
        return response.status(500).json(error)

    }
}

const postNewMobile = async (request, response) => {
    try {
        
        const {brand, capacity, price, image} = request.body;
        const newMobile = new Mobiles({brand, capacity, price, image});
        const createdMobile = await newMobile.save();
        return response.status(201).json(createdMobile);

    } catch (error) {
        
        return response.status(500).json(error)

    }
}

const putMobile = async (request, response) => {
    try {
        
        const {id} = request.params; //Recogemos de request.params el "id"
        const putMobile = new Mobiles(request.body);
        putMobile._id = id;

        const mobileDb = await Mobiles.findByIdAndUpdate(id, putMobile);
        if(!mobileDb) { //Para controlar el error si no encuentra en la base de datos.
            
            return response.status(404).json( {message : "Mobile not found on database."} );

        }

        return response.status(200).json(putMobile) //Si no hay error, devuelve el elemento actualizdo.

    } catch (error) {
        
        return response.status(500).json(error)

    }
}

const deleteMobile = async (request, response) => {
    try {
        
        const {id} = request.params; //Recogemos de request.params el "id"
        const mobileDb = await Mobiles.findByIdAndDelete(id);

        if(!mobileDb) {

            return response.status(404).json({ message : "Mobile not found on database."});

        }

        return response.status(200).json(mobileDb);

    } catch (error) {
        
        return response.status(500).json(error)

    }
}


module.exports = {getAllMobiles, getMobile, postNewMobile, putMobile, deleteMobile}; //Exportamos todas las funciones que hemos creado por separado para tener más organizado el código.