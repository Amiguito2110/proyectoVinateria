"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const botellasController_1 = require("../controllers/botellasController");
class BotellasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        //this.router.get('/mostrarTodasBotellas/',(req,res) => res.send('probando Botellas'));
        this.router.get('/mostrarTodasBotellas/', botellasController_1.botellasController.mostrar_todas_botellas);
        this.router.get('/obtenerBotella/:id', botellasController_1.botellasController.listOne);
        this.router.post('/agregarBotella/', botellasController_1.botellasController.agregarBotella);
        this.router.put('/actualizarBotella/:id', botellasController_1.botellasController.actualizarBotella);
        this.router.delete('/eliminarBotella/:id', botellasController_1.botellasController.eliminarBotella);
        this.router.get('/listarBotellasTipo/:id', botellasController_1.botellasController.listarBotellasTipo);
    }
}
const botellasRoutes = new BotellasRoutes();
exports.default = botellasRoutes.router;
