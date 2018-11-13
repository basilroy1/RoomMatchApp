import React, { Component } from 'react';
import fire from '../../config/fire';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = 
    {
      email: '',
      password: ''
    }
  }

  handleChange = (e) => {

    let change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);

  }
  
  // Allows users to sign up with email
  handleEmailSignUp = (e) => {
    e.preventDefault();

    const newEmail = this.state.email;
    const newPassword = this.state.password;
    // check if user entered a mumail or mu.ie email
    const validEmail = (newEmail.endsWith("@mumail.ie") || newEmail.endsWith("@mu.ie")); 

    if(!validEmail){
      alert("Please enter a valid maynooth email address");
      return;
    }

    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    
    });
  }

  handleEmailLogIn = () => {

    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      console.log(error);      
    });
    
  }

  handleLogOut = () => {
    fire.auth().signOut();
  }
  
  render() {
    return (
      <div>
        <h1>This is the Login / Signup Page</h1>
      </div>
    )
  }
}

export default Login;