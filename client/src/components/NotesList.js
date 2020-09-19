import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class NotesList extends Component {

  state = {
    notas: [],
  }

  componentDidMount(){
    this.getNotas();
  }

  async getNotas(){
    const resp = await axios.get('http://localhost:4000/api/notes')
    this.setState({
      notas: resp.data
    })
  }

  convertDate(fechautc) {
    var fechaFormat = new Date(fechautc);
    var options = {
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric"
    };
    return fechaFormat.toLocaleDateString("es-CL", options);
  }

  async deleteNota(id){
    await axios.delete(`http://localhost:4000/api/notes/${id}`);
    this.getNotas();
  }

  render() {
    return (
      <div className="row">
        {
          this.state.notas.map( nota => (
            <div className="col-md-4 p-2" key={nota._id}>
              <div className="card">
                <div className="card-header d-flex justify-content-between">
                  <h5>{nota.title}</h5>
                  <Link className="btn btn-dark" to={`/edit/${nota._id}`}>Editar</Link>
                </div>
                <div className="card-body">
                  <p className="card-text">{nota.description}</p>
                  <p className="card-text">{nota.autor}</p>
                  <p className="card-text text-muted">{this.convertDate(nota.date)}</p>
                </div>
                <div className="card-footer">
                  <button className="btn btn-danger" onClick={() => this.deleteNota(nota._id)}>Eliminar</button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}
