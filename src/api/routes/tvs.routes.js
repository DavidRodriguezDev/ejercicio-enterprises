const express = require('express');

const routerTvs = express.Router(); //Creamos nuestro enroutador.

const {getAllTvs, getTv, postNewTv, putTv, deleteTv} = require('../controllers/tvs.controllers');

routerTvs.get('/', getAllTvs);        //GET Creamos todas las funciones, las exportamos y las anexionamos al router correspondiente
routerTvs.get('/:id', getTv);         //GET Unitario por id
routerTvs.post('/', postNewTv);          //POST Para crear un nuevo elemento a la base de datos.
routerTvs.put('/:id', putTv);     //PUT Para modificar un elemento de la base de datos recibiendo como parámetro un id
routerTvs.delete('/:id', deleteTv);  //DELETE Para eliminar un elemento de la base de datos recibiendo como parámetro un id*/

module.exports = routerTvs;