const express = require("express");
const app = express();
const path = require("path")

//Levantar servidor en puerto 3000. localhost:3000
app.listen(3000, console.log("MercadoLiebre más veloz que la tortuga!"))

//Carpeta public
app.use(express.static("public"));

//Rutas
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/index.html"))
})