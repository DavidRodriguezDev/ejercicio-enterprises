const express = require('express');

const routerMobiles = express.Router(); //Creamos nuestro enroutador.

const {getAllMobiles, getMobile, postNewMobile, putMobile, deleteMobile} = require('../controllers/mobiles.controllers');

routerMobiles.get('/', getAllMobiles);        //GET Creamos todas las funciones, las exportamos y las anexionamos al router correspondiente
routerMobiles.get('/:id', getMobile);         //GET Unitario por id
routerMobiles.post('/', postNewMobile);          //POST Para crear un nuevo elemento a la base de datos.
routerMobiles.put('/:id', putMobile);     //PUT Para modificar un elemento de la base de datos recibiendo como parámetro un id
routerMobiles.delete('/:id', deleteMobile);  //DELETE Para eliminar un elemento de la base de datos recibiendo como parámetro un id*/

module.exports = routerMobiles;