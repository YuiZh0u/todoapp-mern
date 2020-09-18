// Archivo que va a arrancar el servidor
require('dotenv').config(); //importa variables de entorno

const app = require('./app'); // importa app del archivo app.js
require('./database');

app.listen(app.get('port'));
console.log(`Server on port ${app.get('port')}`);
