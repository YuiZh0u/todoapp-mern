const { Router } = require('express'); //llamamos el objeto Router de express
const router = Router(); //hacemos uso de la funcion Router => Enrutadores

router.route('/') // hace referencia a la ruta definida en app.js (/api/notes)
  .get((req,res) => res.json({message: 'GET Request'}))
  .post((req, res) => res.json({message: 'POST Request'}))

router.route('/:id')
  .get((req, res) => res.json({message: 'Datos de una nota especifica'}))
  .put((req, res) => res.json({message: 'Nota aCtualizada'}))
  .delete((req, res) => res.json({message: 'Nota eliminida'}))

module.exports = router;