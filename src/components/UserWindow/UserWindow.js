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

      <div className="wrapper">
        <div className="profile">
          <img className="profilePicture" src={this.props.imageAsBase64}></img>
            <h3 id="name">{this.props.name} , {this.props.age}</h3>
            <p className="title">{this.props.course}</p>
            <p className="subTitle">{this.props.year} Year</p>
            <div className="bio">
              <p className="description"><strong>Interests: </strong>{this.props.interests}</p>
              <p className="location"><strong>Location: </strong>{this.props.location}</p>
              <button type="button" id="moreInfoButton" onClick={this.handleClick}>Email Me</button>
              {this.state.readMoreIsClicked ?  <UserBio id = "email" email = {this.props.email} /> : null}
            </div>

        </div>

      </div>
    )
  }
  }

export default UserWindow;
 