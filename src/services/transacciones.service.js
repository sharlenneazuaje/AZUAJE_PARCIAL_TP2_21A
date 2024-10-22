import Factory from "../models/factory.js"

 class TransaccionesService{
    constructor(){
        //this.model = Factory.get("")
        this.model = Factory.get("FS")
    }

    getAllTransacciones = async () => {
        return await this.model.getAllTransacciones()
    }

    postTransacciones = async (data) => {
        return await this.model.postTransacciones(data)
    }

    getCantidadTransacciones = async () => {
        return await this.model.getCantidadTransacciones()
    }

    deleteTransaccionesById = async (id) => {
        return await this.model.deleteTransaccionesById(id)
    }
    
}

export default TransaccionesService 