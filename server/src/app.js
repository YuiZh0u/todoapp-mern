// Contiene el codigo del servidor o del framework
const express = require('express'); // Importar express
const app = express(); // Llama a express
const cors = require('cors');

//Settings
app.set('port', process.env.PORT || 4000)

//Middlewere (funciones que se ejecuten antes de llegar a la ruta)
app.use(cors());
app.use(express.json());

//Routes (url q el usuario puede acceder)
app.use('/api/users', require('./routes/users')) //es puramente nombre la ruta /api/ , se pone asi ya q se el servidor enviara json como si fuera una api
app.use('/api/notes', require('./routes/notes')) // .use significa que cada vez q accedo a esa ruta hare uso de algo

module.exports = app; // Importa el modulo de express para ser llamado en index.js
