const express = require("express");
const app = express();
const path = require("path")
const port = process.env.PORT || 3000;

//Levantar servidor en puerto 3000. localhost:3000
app.listen(port, console.log("MercadoLiebre más veloz que la tortuga!"))

//Carpeta public
app.use(express.static("public"));

//Rutas
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/index.html"))
})
app.get("/register", (req,res) => {
    res.sendFile(path.join(__dirname, "/views/register.html"))
})
app.get("/login", (req,res) => {
    res.sendFile(path.join(__dirname, "/views/login.html"))
})