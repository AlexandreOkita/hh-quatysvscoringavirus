import React, { Component } from "react" //always import
import './Signup.css';
import Logo from '../images/logo.png'
import {Button} from '@material-ui/core';

//Crete component
class Signup extends Component {
  //COntructor, you must put in all cases
  constructor(props){
    super(props);
    //put this just if you will need to use (I am using to send to api)
    this.state = {name: '', email: ''};

    //bind the functions that you will use
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.submitInfo = this.submitInfo.bind(this);
  };

  //handle on change name
  handleChangeName(event) {
    console.log(event.target.value);
    this.setState({name: event.target.value});
  }

  //handle on chamge email
  handleChangeEmail(event) {
    this.setState({email: event.target.value});
  }

  //api call
  async submitInfo(name, email) {
    //try catch to get errors
    try {
      await fetch( 'http://34.95.183.232/hack', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
        })
      }).then(response => response.json())
    } catch {
      console.log("ERROR")
    }
  }




  render() {

    return (
      <div class="container">
        <div class="logoDiv">
          <div class="imgDiv">
          <img src = {Logo}/>
          </div>
        </div>
        <div class="signupDiv">
          <div class="signupContent">
            <h2>Crie sua conta com a gente!</h2>
            <form>
              <ul>
                <li>
                  <p>Nome: </p>
                  <label>
                  <input type="text" value={this.state.name} onChange={this.handleChangeName}/>
                  </label>
                </li>
                <li>
                  <p>Email:</p>
                  <label>
                  <input type="text" value={this.state.email}  onChange={this.handleChangeEmail}/>
                  </label>
                </li>
                <li>
                  <p>Senha:</p>
                  <label>
                  <input type="password" name="name" />
                  </label>
                </li>
                <li>
                  <p>Confirmar Senha:</p>
                  <label>
                  <input type="password" name="name" />
                  </label>
                </li>
                <li class="signupBtn">
                <Button variant="outlined" color="secondary"  onClick={() => this.submitInfo(this.state.name, this.state.email)}>
                  Registrar-se
                </Button>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    );
  }
}


//export component
export default Signup;