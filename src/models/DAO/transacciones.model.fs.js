import fs from "fs"

class TransaccionesFsModel{
    constructor(){
        this.transacciones = "transacciones.json"
    }

    getAllTransacciones = async () =>{
        try{
            const file = await fs.promises.readFile(this.transacciones,"utf-8")
            const transacciones = JSON.parse(file)
            return transacciones
        }catch(error){
            console.error("Error al obtener las transacciones", error)
            return "Error al obtener los usuarios"
        }
    }

    postTransacciones = async (data) => {
        try {
            const file = await fs.promises.readFile(this.transacciones, "utf-8")
            const transacciones = JSON.parse(file) // Convierte el contenido JSON en un array de objetos
            data.id = transacciones[transacciones.length - 1]?.id + 1 || 1
            transacciones.push(data)
            const updatedData = JSON.stringify(transacciones, null, 2)  // Convierte el array a JSON nuevamente
            await fs.promises.writeFile("transacciones.json", updatedData, "utf-8")
            console.log("Transacción agregada correctamente.")
            return data
        } catch (error) {
            console.error("Error al agregar la transacción", error);
            return "Error al agregar la transacción"
        }
    }

    getCantidadTransacciones = async () => {
        try {
            const file = await fs.promises.readFile(this.transacciones, 'utf-8')
            const transacciones = JSON.parse(file)
            const cantidad = transacciones.length; // Obtener la cantidad de transacciones
            return `Cantidad de transacciones en cuenta: ${cantidad}`;
        } catch (error) {
            console.error("Ha ocurrido un error: ", error);
        }
    }


    deleteTransaccionesById = async (id) => {
        try{
            const file = await fs.promises.readFile(this.transacciones, "utf-8")
            const transacciones = JSON.parse(file)
            const index = transacciones.findIndex((e) => e.id == id)
            if (index == -1) return "El ID no existe"
            transacciones.splice(index, 1)
            const updateData = JSON.stringify(transacciones, null, 2)
            await fs.promises.writeFile("transacciones.json", updateData, "utf-8")
            return "La transacción fue borrada"
        }catch(error){
            console.error("Ha ocurrido un error", error)
            return "Error"
        }
    }
}

export default TransaccionesFsModel 