// Encargado de contener la conexion a la base de datos
const mongoose = require('mongoose');

const URI = 'mongodb://localhost/firstmern'; //crea una base de datos firstmern

mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true
})

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('Conectado a MongoDB');
})