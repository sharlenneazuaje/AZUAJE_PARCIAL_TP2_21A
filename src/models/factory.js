import TransaccionesMemModel from "./DAO/transacciones.model.mem.js"
import TransaccionesFsModel from "./DAO/transacciones.model.fs.js"

class Factory{
    static get(persistence){
        switch(persistence){
            case "MEM":
                console.log("Persistiendo en la memoria del Servidor")
                return new TransaccionesMemModel()
            case "FS":
                console.log("Persistiendo en la memoria del File System")
                return new TransaccionesFsModel()
            default:
                console.log("Persistiendo en la memoria por default")
                return new TransaccionesMemModel()
        }
    }
}

export default Factory  