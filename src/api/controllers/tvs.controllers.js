
const Tvs = require('../models/tvs.models'); //Nos traermos el modelo del archivo tvs.models

const getAllTvs = async (request, response) => {
    try {
        
        const allTvs = await Tvs.find(); //Cogemos todas las tvs de nuestro modelo "Tvs".
        return response.status(200).json(allTvs);

    } catch (error) {
        
        return response.status(500).json(error)

    }
}

const getTv = async (request, response) => {
    try {
        
        const {id} = request.params;
        const allTvs = await Tvs.findById(id); //Cogemos todas las Tvs de nuestro modelo "Tvs
        return response.status(200).json(allTvs);

    } catch (error) {
       
        return response.status(500).json(error)

    }
}

const postNewTv = async (request, response) => {
    try {
        
        const {brand, inches, price, image} = request.body;
        const newTv = new Tvs({brand, inches, price, image});
        const createdTv = await newTv.save();
        return response.status(201).json(createdTv);

    } catch (error) {
        
        return response.status(500).json(error)

    }
}

const putTv = async (request, response) => {
    try {
        
        const {id} = request.params; //Recogemos de request.params el "id"
        const putTv = new Tvs(request.body);
        putTv._id = id;

        const tvDb = await Tvs.findByIdAndUpdate(id, putTv);
        if(!tvDb) { //Para controlar el error si no encuentra en la base de datos.
            
            return response.status(404).json( {message : "Tv not found on database."} );

        }

        return response.status(200).json(putTv) //Si no hay error, devuelve el elemento actualizdo.

    } catch (error) {
        
        return response.status(500).json(error)

    }
}

const deleteTv = async (request, response) => {
    try {
        
        const {id} = request.params; //Recogemos de request.params el "id"
        const tvDb = await Tvs.findByIdAndDelete(id);

        if(!tvDb) {

            return response.status(404).json({ message : "Tv not found on database."});

        }

        return response.status(200).json(tvDb);

    } catch (error) {
        
        return response.status(500).json(error)

    }
}


module.exports = {getAllTvs, getTv, postNewTv, putTv, deleteTv}; //Exportamos todas las funciones que hemos creado por separado para tener más organizado el código.