import React, { Component } from 'react';
import fire from '../../config/fire';

class Login extends Component {
  constructor(props) {
    super(props);
    // this.login = this.login.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    // this.signup = this.signup.bind(this);
    // this.togglePersistance = this.togglePersistance.bind(this);
    this.state = {
      email: '',
      password: '',
      clicked: ''
    
    };
  }


  handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }


  login = (e) => {
    e.preventDefault();
    
    this.handleRememberMe();

    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
      console.log("Log in");
    }).catch((error) => {
        
      alert("Please enter a valid email or password");
      

      console.log(error.message);
    });
  }

  handleRememberMe = () => {
    const checkBoxClicked = this.state.clicked;

    if (!checkBoxClicked) {
      fire.auth().setPersistence("none");
    }

  }

  sendPasswordResetEmail = (e) => {
    const auth = fire.auth();
    const email = this.state.email;
    const validEmail = (email.endsWith("@mumail.ie") || email.endsWith("@mu.ie"));

    if(!validEmail) {
      alert("Please enter a valid email");
      return;
    }
      

    auth.sendPasswordResetEmail(email)
    .then(
      alert("An email has been sent to you to reset your password")
    )

  }



  signup = (e) => {
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
      })
  }
  render() {
    return (
      <div className="container">

        <h3>Sign Up or Login to use the site</h3>

        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input  value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input  value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            <button onClick={this.sendPasswordResetEmail}>Reset password</button>
          </div>
          <button type="submit" onClick={this.login}>Login</button>
          <button onClick={this.signup} >Signup</button> <br />
          <input type="checkbox" name="clicked" onClick={this.handleChange}/>Remember me<br />
        </form>
      
      </div>
    );
  }
}
export default Login;