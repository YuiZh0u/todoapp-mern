//Funciones relacionadas a las notas
const notesCtrl = {};

notesCtrl.getAllNotes = (req,res) => res.json({message: 'GET Request'});
notesCtrl.createNote = (req, res) => res.json({message: 'POST Request'});
notesCtrl.updateNote = (req, res) => res.json({message: 'UpdAtE Note'});
notesCtrl.deleteNote = (req, res) => res.json({message: 'dleTE Request'});
notesCtrl.getOneNote = (req, res) => res.json({message: 'get just one Request'});

module.exports = notesCtrl;