const express = require("express");
const app = express();
const path = require("path");

const publicPath = path.resolve(__dirname, "./public")
app.use(express.static(publicPath))


// RUTAS
app.get("/", (req,res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
})


app.listen(3000, () => console.log("servidor corriendo en el puerto 3000"));
