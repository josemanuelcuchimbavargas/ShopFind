"use strict";
// Cargamos el módulo de express para poder crear rutas
var express = require("express");
// Cargamos el controlador
var StoreController = require("../controllers/store");

// Llamamos al router
var api = express.Router();
var md_auth = require("../middlewares/authenticated");
// Creamos una ruta para los métodos que tenemos en nuestros controladores

// STORE
api.post("/register/store", md_auth.ensureAuth, StoreController.registerStore);
api.get("/get/store", md_auth.ensureAuth, StoreController.getStoresById);
api.post("/delete/store", md_auth.ensureAuth, StoreController.deleteStoresById);


// Exportamos la configuración
module.exports = api;
