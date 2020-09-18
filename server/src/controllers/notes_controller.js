//Funciones relacionadas a las notas
const notesCtrl = {};

const noteModel = require('../models/note');
// const { render } = require('../app');

notesCtrl.getAllNotes = async (req,res) => {
  const notas = await noteModel.find(); //because find() es asincrono
  res.json(notas);
};

notesCtrl.createNote = async (req, res) => {
  const {title, description, date, autor} = req.body; //lo q entrega el POST
  const newNote = new noteModel({
    title: title,
    description: description,
    date: date,
    autor: autor
  }); // destructura el body en los campos de la bdd
  await newNote.save(); //Guarda la nota en la bdd
  console.log(newNote);
  res.send("Nota guardada");
};

notesCtrl.updateNote = async (req, res) => {
  const {title, description, autor} = req.body;
  await noteModel.findOneAndUpdate(req.params.id, {
    title: title,
    description: description,
    autor: autor
  })
  console.log(req.params.id);
  console.log(req.body);
  res.send("Nota actualizada")
};

notesCtrl.deleteNote = async (req, res) => {
  await noteModel.findByIdAndDelete(req.params.id); //req.params.id consigue el id de la url
  res.send("Nota eliminada")

};

notesCtrl.getOneNote = async (req, res) => {
  const note = await noteModel.findById(req.params.id)
  console.log(note);
  res.json(note)
};

module.exports = notesCtrl;