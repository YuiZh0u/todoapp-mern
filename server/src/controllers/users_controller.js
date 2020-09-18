const usersCtrl = {};

const userModel = require('../models/user');

usersCtrl.getAllUsers = async (req,res) => {
  const usuarios = await userModel.find();
  res.json(usuarios)
};

usersCtrl.createUser = async (req, res) => {
  const {username} = req.body;
  const newUser = new userModel({
    username: username
  });
  await newUser.save(
    function(error){
      if(error){
        if (error.code == '11000'){
          return res.status(500).json({success: false, message: 'Usuario repetido.'})
        }else{ // cualquier otro error
          return res.send(error)
        }
      }
      res.json({message: "Usuario creado."})
    });
};

usersCtrl.updateUser = async (req, res) => {
  try {
    const {username} = req.body;
    const updateUser = await userModel.findByIdAndUpdate(req.params.id, {
      username: username
    })
    console.log(updateUser);
  } catch (error) {
    console.log(error);
    res.json(error.errmsg)
  }

  // await userModel.findByIdAndUpdate(req.params.id,
  //   function(error){
  //     const {username} = req.body;
  //     username:username
  //     if(error){
  //       if (error.code == '11000'){
  //         return res.status(500).json({success: false, message: 'Usuario repetido.'})
  //       }else{ // cualquier otro error
  //         return res.send(error)
  //       }
  //     }else{
  //       username: username
  //     }
  //   }
  // )
  res.json({message: "Usuario actualizado."});
},

usersCtrl.deleteUser = async (req, res) => {
  await userModel.findByIdAndDelete(req.params.id)
  res.send("Usuario eliminado")
};

usersCtrl.getOneUser = async (req, res) => {
  const user = await userModel.findById(req.params.id)
  console.log(user);
  res.json(user)
},

module.exports = usersCtrl;