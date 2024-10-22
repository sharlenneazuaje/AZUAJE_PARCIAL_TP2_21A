import express from "express"
import Router from "./src/routes/transacciones.route.js"

const app = express()
const PORT = 8080

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use("/", new Router().start())

app.listen(PORT, () => console.log("Server running..."))
app.on("Error", (error) => console.log(error)) 