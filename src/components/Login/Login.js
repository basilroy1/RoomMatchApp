import React, { Component } from 'react';
import fire from '../../config/fire';

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

<<<<<<< HEAD
    const newEmail = this.state.email;
    const newPassword = this.state.password;
    // check if user entered a mumail or mu.ie email
    const validEmail = (newEmail.endsWith("@mumail.ie") || newEmail.endsWith("@mu.ie")); 

    if(!validEmail){
      alert("Please enter a valid maynooth email address");
      return;
    }

    fire.auth().createUserWithEmailAndPassword(newEmail, newPassword)
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      
      if (errorCode === 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    
    });
  }

  handleEmailLogIn = (e) => {
=======
  login(e) {
>>>>>>> 001e7dadc5e17f0c6a9ce7a1931cfe8ef294072e
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        console.log(error);
      });
  }

  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
      })
  }
  render() {
    return (
      <div className="col-md-6">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input  value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input  value={this.state.password} onChange={this.handleChange} type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <button type="submit" onClick={this.login} class="btn btn-primary">Login</button>
          <button onClick={this.signup} style={{marginLeft: '25px'}} className="btn btn-success">Signup</button>
        </form>
      
      </div>
    );
  }
}
export default Login;