import React, { Component } from 'react';
import UserBio from '../UserBio/UserBio';
import './userWindow.css';
class UserWindow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      readMoreIsClicked : false
    }
  }

  handleClick = e => {

    e.preventDefault();
    this.setState({
      readMoreIsClicked: !(this.state.readMoreIsClicked)
    });
    
  }



  render() {
      
    return (

      <div className="userProfile">
        <h3 id="name">{this.props.name}</h3>
        <ul>
          <li className="listItem">Age: {this.props.age}</li>
          <li className="listItem">Location: {this.props.location}</li>
          <li className="listItem">Course: {this.props.course}</li>
          
        </ul>
        <button id="moreInfoButton" onClick={this.handleClick}>More info</button>
        {this.state.readMoreIsClicked ?<UserBio info = {this.props.interests}/> : null}
      </div>
 //87a214f6b00648c79a3fd8c8dfc6f5358254905f
    )
 






  }
  }

export default UserWindow;
 