import React, { Component } from 'react';
import './App.css';
import fire from './config/fire';
import Login from './components/Login/Login';
<<<<<<< HEAD
 import UserSection from './components/UserSection/UserSection';
=======
>>>>>>> 8f174dec6bc2af21ee36405e50d5f14f72af7005
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
        {this.state.user ? (<UserSection />) : (<Login />)}
      </div>
    );
  }
}

export default App;
