import React, { Component } from 'react'

class UserBio extends Component {
  render() {
    return (
      <div>
        {this.props.email}
      </div>
    )
  }
}

export default UserBio;
