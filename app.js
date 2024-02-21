const express = require("express");
const app = express();
const path = require("path");

const publicPath = path.resolve(__dirname, "./public")
app.use(express.static(publicPath))


// RUTAS
app.get("/", (req,res) => {
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
})
app.get("/registro", (req,res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
})
app.get("/inicio-de-sesion", (req,res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
})


app.listen(3000, () => console.log("servidor corriendo en el puerto 3000"));
