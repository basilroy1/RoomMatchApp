import React, { Component } from 'react';
import fire from '../../config/fire';

class Home extends Component {

  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout(e) {
    e.preventDefault();
    fire.auth().signOut();
  }

  render() {
    return (
      <div>
        <h1>This is the homepage</h1>
        <button onClick = {this.logout}>Log Out</button>
      </div>
    )
  }
}

export default Home;