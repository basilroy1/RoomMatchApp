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
          <li className="listItem">{this.props.age}</li>
          <li className="listItem">{this.props.location}</li>
          <li className="listItem">{this.props.course}</li>
          <li className="listItem">{this.props.interests}</li>
        </ul>
        <button onClick={this.handleClick}>Want to know more?</button>
        {this.state.readMoreIsClicked ?<UserBio info = {this.props.interests}/> : null}
      </div>
    )
  }
}

export default UserWindow;
