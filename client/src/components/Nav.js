import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">Notas</Link>

        <div className="collapse navbar-collapse container" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Todas las notas</Link>
            </li>
            <li className="nav-item">
             <Link className="nav-link" to="/create">Crear nota</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/user">Crear usuario</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
