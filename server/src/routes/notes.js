const { Router } = require('express'); //llamamos el objeto Router de express
const router = Router(); //hacemos uso de la funcion Router => Enrutadores

router.route('/') // hace referencia a la ruta definida en app.js (/api/notes)
  .get((req,res) => res.send('hola'))
//   .post()

// router.route('/:id')
//   .get()
//   .put()
//   .delete()

module.exports = router;