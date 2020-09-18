// Archivo que va a arrancar el servidor
require('dotenv').config(); //importa variables de entorno


const app = require('./app'); // importa app del archivo app.js
require('./database');

const port = 4000;
app.listen(port);
