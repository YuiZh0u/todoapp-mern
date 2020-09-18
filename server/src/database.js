// Encargado de contener la conexion a la base de datos
const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'Agregar MONGODB_URI in .env'; //process es un objeto de javascript sobre el sistema operativo

mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true
}); //warnings mostrado en la ejecucion

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('Conectado a MongoDB');
})