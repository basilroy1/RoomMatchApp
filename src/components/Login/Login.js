import React, { Component } from 'react';
import PasswordResetModal from '../PasswordResetModal/PasswordResetModal';
import fire from '../../config/fire';
import { Button, ButtonGroup } from 'react-bootstrap';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      clicked: '',
      viewPasswordResetModal: false
    };
  }

  // Sets the state to the corresponding input
  handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  // Start of login functionality
  login = (e) => {
    e.preventDefault();
    
    this.handleRememberMe(); // Function to toggle persistant login

    // Built in firebase sign in functionality
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
      console.log("Log in");
    }).catch((error) => {
        
      alert("Please enter a valid email or password");
      console.log(error.message);

    });
  }
  // End of login functionality

  
  // Start of 'remember me' functionality
  handleRememberMe = () => {
    // Checking the state of the 'remember me' checkbox
    const checkBoxClicked = this.state.clicked; 

    // If the user has not checked the 'remember me' checkbox
    if (!checkBoxClicked) {
      fire.auth().setPersistence("none"); // Prevent persistant log in session
    }

  }
  // End of 'remember me' functionality

  // Start of password reset functionality
  sendPasswordResetEmail = (e) => {

    e.preventDefault();

    const auth = fire.auth();
    const email = this.state.email;
    const validEmail = (email.endsWith("@mumail.ie") || email.endsWith("@mu.ie"));

    if(!validEmail) {
      alert("Please enter a valid Maynooth email");
      return;
    }
      

    auth.sendPasswordResetEmail(email)
    .then(
      alert("An email has been sent to you to reset your password")
    )

  }
  // End of password reset functionality

  
  // Start of sign up functionality
  signup = (e) => {
    e.preventDefault();

    const validEmail = ((this.state.email).endsWith("@mumail.ie")||(this.state.email).endsWith("@mu.ie"));

    if(!validEmail){
      alert("Please enter a valid Maynooth email address");
      return;
    }

    
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    })
    .then((u) => {
      console.log(u);
    })
    .catch((error) => {
        console.log(error);
      })
  }
  // End of sign up functionality

  toggleModal = (e) => {
    e.preventDefault();
    this.setState({
      viewPasswordResetModal: !(this.state.viewPasswordResetModal)
    });
  }

  render() {

    return (
      <div className="container">

        <h3>Sign Up or Login to use the site</h3>

        <form>

          <div className="form-group">
            <label htmlFor="emailInput">Email address</label>
            <input  
            value={this.state.email} 
            onChange={this.handleChange} 
            type="email" 
            name="email" 
            className="form-control" 
            placeholder="Enter your Maynooth email address" 
            />
          </div>

          <div className="form-group">
            <label htmlFor="passwordInput">Password</label>
            <input 
            value={this.state.password} 
            onChange={this.handleChange} 
            type="password" 
            name="password" 
            className="form-control" 
            placeholder="Enter your Password" 
            />
            <Button onClick={this.toggleModal}>Forgot your password?</Button>
            { this.state.viewPasswordResetModal ? <PasswordResetModal/> : null }
          </div> 

          <ButtonGroup>
            <Button onClick={this.login}>Login</Button>
            <Button onClick={this.signup} >Signup</Button> <br />
            <input 
            type="checkbox" 
            name="clicked" 
            onClick={this.handleChange}
            />
            Remember me
            <br />
          </ButtonGroup>
           
        </form>
      
      </div>
    );
  }
}
export default Login;