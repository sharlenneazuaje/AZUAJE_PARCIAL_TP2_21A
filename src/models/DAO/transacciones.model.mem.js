class TransaccionesMemModel{
    constructor(){
        this.transacciones = [
            { id: 1, tipo: "retiro", monto: 1000, destinatario: "Juan Perez" },
            { id: 2, tipo: "deposito", monto: 1500, destinatario: "Maria Gomez" },
            { id: 3, tipo: "transferencia", monto: 2000, destinatario: "Carlos Martinez" },
            { id: 4, tipo: "retiro", monto: 500, destinatario: "Ana Lopez" },
            { id: 5, tipo: "deposito", monto: 1200, destinatario: "Luis Fernandez" }
        ]
    }

    getAllTransacciones = async () =>{
        return this.transacciones
    }

    postTransacciones = async (data) => {
        try{
            data.id = this.transacciones[this.transacciones.length - 1]?.id + 1 || 1
            this.transacciones.push(data)
            return data
        }catch(error){
            console.error("Ha ocurrido un error: ", error)
        }
    }

    getCantidadTransacciones = async () => {
        try{
            const cantidad = this.transacciones.length;
            return `Cantidad de transacciones en cuenta: ${cantidad}`
        }catch(error){
            console.error("Ha ocurrido un error: ", error)
        }
    }

    deleteTransaccionesById = async (id) => {
        try{
            const index = this.transacciones.findIndex((x) => x.id == id)
            if (index == -1) return "El ID no existe"
            this.transacciones.splice(index,1)
            return "La transacción fue borrada"
        }catch(error){
            console.error("Ha ocurrido un error: ", error)
        }
    }

}

export default TransaccionesMemModel  