import React, { Component } from 'react';
import fire from '../../config/fire';
import { Button } from 'react-bootstrap';
import './TestHomePage.css';
import UserSection from '../UserSection/UserSection';
import UserDisplaySection from '../UserDisplaySection/UserDisplaySection';

class TestHomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {    
      willDisplayUsers : false,
      willDisplayProfile : false,
      people: []
    }
  }

  logout = e => {
    e.preventDefault();
    fire.auth().signOut();
  }

  handleDisplayUsers = e => {
    e.preventDefault();
    this.setState({
      willDisplayUsers: !(this.state.willDisplayUsers),
      
    });
  }

  handleProfileDisplay = e => {
    e.preventDefault();
    this.setState({
      willDisplayProfile: !(this.state.willDisplayProfile)
    });
  }


  render() {

    return (
      <div>
        <Button onClick={this.logout}>Logout</Button> <br />
        <Button onClick={this.handleDisplayUsers}>View Potential RoomMates</Button> <br />
        <Button onClick={this.handleProfileDisplay}>Your Profile</Button> <br />
        {this.state.willDisplayUsers ? <UserDisplaySection/>: null}
        {this.state.willDisplayProfile ? <UserSection />: null}
      </div>
    );
  }
}

export default TestHomePage;
