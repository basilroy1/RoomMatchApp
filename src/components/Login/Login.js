import React, { Component } from 'react';
import fire from '../../config/fire';
import Bootstrap from 'bootstrap';

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    // this.togglePersistance = this.togglePersistance.bind(this);
    this.state = {
      email: '',
      password: '',
      persistantSession : ""
    };
  }



  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    
    const userWantsToBeRemembered = this.state.persistantSession; 
    if(!userWantsToBeRemembered){ // if the user didn't click the 'remember me' checkbox
      fire.auth().setPersistence("none");  // don't allow persistant log in
    }


    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
      console.log("Log in ");
    }).catch((error) => {
        
      alert(error.message);

      console.log(error.message);
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
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input  value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input  value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <button type="submit" onClick={this.login}>Login</button>
          <button onClick={this.signup} >Signup</button> <br />
          <input type="checkbox" name="persistantSession" onClick={this.handleChange}/>Remember me<br />
        </form>
      
      </div>
    );
  }
}
export default Login;