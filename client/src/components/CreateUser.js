import React, { Component } from 'react'
import axios from 'axios'

export default class CreateUser extends Component {

  state = {
    users: [],
    username: "",
  }

// TODO: desplegar mensaje cuando un username ya existe

  async componentDidMount(){ //una vez q el componente es montado procede a renderizar
   this.getUsers();
  }

  onChangeUsername = (text) => {
    // console.log(text.target.value);
    this.setState({
      username: text.target.value
    })
  }

  async getUsers() {
    const resp = await axios.get('http://localhost:4000/api/users');
    this.setState({users: resp.data})
  }

  submitUser = async (event) => {
    event.preventDefault(); // previene q se resete la pagina al submit
    await axios.post('http://localhost:4000/api/users', {username: this.state.username})
    this.state.username = ""
    this.getUsers();
    // console.log(newUser);
  }

  deleteUser = async (id) => {
    await axios.delete(`http://localhost:4000/api/users/${id}`)
    this.getUsers();
  }

  render() {
    return (
      <div className="row">
        <div className="div col-md-4 mr-5">
          <div className="card card-body">
            <h3>Crear nuevo usuario</h3>
            <form onSubmit={this.submitUser}>
              <div className="form-group">
                <input type="text" className="form-control" value={this.state.username} onChange={this.onChangeUsername}/>
              </div>
              <button type="submit" className="btn btn-primary">
                Crear
              </button>
            </form>
          </div>
        </div>
        <div className="div col-md-6">
          <ul className="list-group">
            {
              this.state.users.map(user =>
                <li className="list-group-item list-group-item-action" key={user._id} onDoubleClick={() => this.deleteUser(user._id)}>
                {user.username}
                </li>
              )
            }
          </ul>
        </div>
      </div>
    )
  }
}
