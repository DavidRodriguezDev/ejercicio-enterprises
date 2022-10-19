const express = require('express');

const routerEnterprises = express.Router(); //Creamos nuestro enroutador.

const {getAllEnterprises, getEnterprise, postNewEnterprise, putEnterprise, deleteEnterprise} = require('../controllers/enterprises.controllers');

routerEnterprises.get('/', getAllEnterprises);        //GET Creamos todas las funciones, las exportamos y las anexionamos al router correspondiente
routerEnterprises.get('/:id', getEnterprise);         //GET Unitario por id
routerEnterprises.post('/', postNewEnterprise);          //POST Para crear un nuevo elemento a la base de datos.
routerEnterprises.put('/:id', putEnterprise);     //PUT Para modificar un elemento de la base de datos recibiendo como parámetro un id
routerEnterprises.delete('/:id', deleteEnterprise);  //DELETE Para eliminar un elemento de la base de datos recibiendo como parámetro un id*/

module.exports = routerEnterprises;