import TransaccionesController from "../controllers/transacciones.controller.js"
import express from "express"

class Router{
    constructor(){
        this.router = express.Router()
        this.controller = new TransaccionesController()
    }

    start(){
        this.router.get("/transacciones", this.controller.getAllTransacciones.bind(this.controller))
        this.router.post("/transacciones", this.controller.postTransacciones.bind(this.controller))
        this.router.get("/transacciones/cantidad", this.controller.getCantidadTransacciones.bind(this.controller))
        this.router.delete("/transacciones/delete/:id", this.controller.deleteTransaccionesById.bind(this.controller))
        
        return this.router
    }
}

export default Router  