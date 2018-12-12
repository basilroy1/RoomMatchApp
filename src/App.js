import React, { Component } from 'react';
import './App.css';
import fire from './config/fire';
import Login from './components/Login/Login';
<<<<<<< HEAD
=======


 

>>>>>>> 4cdda5ac262ad24c80cd878f3edc6d2bc0301aff
import TestHomePage from './components/TestHomePage/TestHomePage';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user:{}
    }
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {

      if(user) {
        this.setState({user});
      }
      else{
        this.setState({user: null});
      }

    });
  }

  render() {
    return (
      <div>
        {this.state.user ? (<TestHomePage />) : (<Login />)}
      </div>
    );
  }
}

export default App;
