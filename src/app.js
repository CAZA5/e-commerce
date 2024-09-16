import express from "express"
//Confguraciones generales
const port = 8080
const app = express()

//rutas
app.get("/", (req, res)=>{
    res.send(200)
})
//Mostrar en puerto 8080
app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})