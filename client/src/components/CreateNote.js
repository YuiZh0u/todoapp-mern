import React, { Component } from 'react'
import axios from 'axios'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default class CreateNote extends Component {

  state = {
    users: [],
    userSelected: '',
    title: '',
    description: '',
    date: new Date()
  }

  async componentDidMount(){
    const resp = await axios.get('http://localhost:4000/api/users')
    this.setState({
      users: resp.data.map(user => user.username),
      userSelected: resp.data[0].username
    })
    // console.log(this.state.users);
  }

  inputChange = e => {
    // console.log(e.target.value, e.target.name);
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  changeDate = fecha => {
    this.setState({date: fecha})
    // console.log(this.state.date);
  }

  crearNota = async (event) => {
    event.preventDefault();
    const newNota = {
      title: this.state.title,
      description: this.state.description,
      autor: this.state.userSelected,
      date: this.state.date,
    }
    await axios.post('http://localhost:4000/api/notes', newNota)
    // console.log(resp);
    // console.log(newNota);
    window.location.href = '/';
  }

  render() {
    return (
      <div className="col-md-6 offset-md-3">
        <div className="card card-body">
          <h3>Crear nota</h3>

          <div className="form-group">
            <select className="form-control" name="userSelected" onChange={this.inputChange}>
              {
                this.state.users.map(user =>
                  <option key={user} value={user}>
                    {user}
                  </option>
                )
              }
            </select>
          </div>

          <div className="form-group">
              <input type="text" className="form-control" name="title" placeholder="Titulo" onChange={this.inputChange} required/>
          </div>

          <div className="form-group">
            <textarea name="description" className="form-control" placeholder="Descripcion" onChange={this.inputChange} required></textarea>
          </div>

          <div className="form-group">
            <DatePicker className="form-control" selected={this.state.date} onChange={this.changeDate}/>
          </div>

          <form onSubmit={this.crearNota}>

            <button type="submit" className="btn btn-success">Crear</button>

          </form>
        </div>

      </div>
    )
  }
}
