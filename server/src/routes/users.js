const { Router } = require('express'); //llamamos el objeto Router de express
const router = Router(); //hacemos uso de la funcion Router

const usersCtrl = require('../controllers/users_controller')

router.route('/') // hace referencia a la ruta definida en app.js (/api/notes)
  .get(usersCtrl.getAllUsers)
  .post(usersCtrl.createUser)

router.route('/:id')
  .get(usersCtrl.getOneUser)
  .put(usersCtrl.updateUser)
  .delete(usersCtrl.deleteUser)

module.exports = router;