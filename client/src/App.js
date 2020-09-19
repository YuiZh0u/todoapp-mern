import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom' // BrowserRouter contenedor de la ruta, Route especifica la ruta
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Nav from './components/Nav';
import CreateNote from './components/CreateNote';
import CreateUser from './components/CreateUser';
import NotesList from './components/NotesList';

function App() {
  return (
    <Router>
      <Nav/>

      <div className="container p-3">
      <Route path="/" exact component={NotesList}/>
      <Route path="/edit/:id" component={CreateNote}/>
      <Route path="/create" component={CreateNote}/>
      <Route path="/user" component={CreateUser}/>
      </div>

    </Router>
  );
}

export default App;
