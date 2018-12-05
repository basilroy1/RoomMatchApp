import React, { Component } from 'react'

class UserBio extends Component {
  render() {
    return (
      <div>
        {this.props.info}
      </div>
    )
  }
}

export default UserBio;
