const express = require("express");
require("dotenv").config();

const { dbConnection } = require("./database/config");
const cors = require("cors");

//Crear el servidor de express
const app = express();

//Base de datos
dbConnection();

//CORS
app.use(cors());

// Directorio público
app.use(express.static("public"));

// Lectura y parseo del login
app.use(express.json());

//Rutas
// Auth
app.use("/api/auth", require("./routes/auth"));

//CRUD

//Escuchar peticiones
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
