import React, { Component } from 'react';
import './App.css';
import fire from './config/fire';
import Login from './components/Login/Login';
<<<<<<< HEAD
=======

>>>>>>> 49f7484a0f1ffe6a806bf712ae8e5bccdd42755f
 import UserSection from './components/UserSection/UserSection';

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
