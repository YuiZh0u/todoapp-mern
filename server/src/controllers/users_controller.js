const usersCtrl = {
  getAllUsers : (req,res) => res.json({message: 'GET USER Request'}),
  createUser : (req, res) => res.json({message: 'POST usr Request'}),
  updateUser : (req, res) => res.json({message: 'UpdAtE userr'}),
  deleteUser : (req, res) => res.json({message: 'dleTE one uSER Request'}),
  getOneUser : (req, res) => res.json({message: 'get just one Request'}),
};

module.exports = usersCtrl;