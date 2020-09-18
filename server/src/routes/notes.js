const { Router } = require('express'); //llamamos el objeto Router de express
const router = Router(); //hacemos uso de la funcion Router => Enrutadores

const notesCtrl = require('../controllers/notes_controller')

router.route('/') // hace referencia a la ruta definida en app.js (/api/notes)
  .get(notesCtrl.getAllNotes)
  .post(notesCtrl.createNote)

router.route('/:id')
  .get(notesCtrl.getOneNote)
  .put(notesCtrl.updateNote)
  .delete(notesCtrl.deleteNote)

module.exports = router;