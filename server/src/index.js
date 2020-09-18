// Archivo que va a arrancar el servidor

const app = require('./app'); // importa app del archivo app.js
require('./database');

const port = 4000;
app.listen(port);
