import TransaccionesService from "../services/transacciones.service.js"

 class TransaccionesController{
    constructor(){
        this.service = new TransaccionesService()
    }

    getAllTransacciones = async (req, res) => {
        const data = await this.service.getAllTransacciones()
        res.send(data)
    }

    postTransacciones = async (req, res) =>{
        const transaccion = req.body

        if(JSON.stringify(req.body) == "{}"){
            console.log("Esto es un objeto vacío")
            throw new Error("El objeto no tiene los parámetros válidos")
        }

        const newTransaccion = await this.service.postTransacciones(transaccion)
        res.send(newTransaccion)
    }

    getCantidadTransacciones = async (req, res) => {
        const data = await this.service.getCantidadTransacciones()
        res.send(data)
    }

    deleteTransaccionesById = async (req, res) => {
        const { id }= req.params
        const deletedTransaccion = await this.service.deleteTransaccionesById(id)
        res.send(deletedTransaccion)
    }
 }

 export default TransaccionesController 