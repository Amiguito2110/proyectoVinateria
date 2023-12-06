"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contenidosController_1 = require("../controllers/contenidosController");
class ContenidosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //this.router.get('/mostrarTodosRoles/',(req,res) => res.send('probando Roles'));
        this.router.get('/mostrarTodosContenidos/', contenidosController_1.contenidosController.mostrar_todos_contenidos);
        this.router.get('/obtenerContenido/:id', contenidosController_1.contenidosController.listOne);
        this.router.post('/crearContenido/', contenidosController_1.contenidosController.createContenido);
        this.router.put('/actualizarContenido/:id', contenidosController_1.contenidosController.actualizarContenido);
        this.router.delete('/eliminarContenido/:id', contenidosController_1.contenidosController.eliminarContenido);
    }
}
const contenidosRoutes = new ContenidosRoutes();
exports.default = contenidosRoutes.router;
