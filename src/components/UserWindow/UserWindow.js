import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Button, Popover, OverlayTrigger } from 'react-bootstrap';
class UserWindow extends Component {

  render() {

    const popoverHoverFocus = (
      <Popover id="popover-trigger-hover-focus">
        <strong>Let's connect!</strong>
      </Popover>
    );
      
    return (
      <div>
        <ListGroup>
          <ListGroupItem>Name: {this.props.name}</ListGroupItem>
          <ListGroupItem>Age: {this.props.age}</ListGroupItem>
          <ListGroupItem>Location: {this.props.location}</ListGroupItem>
          <ListGroupItem>Course: {this.props.course}</ListGroupItem>
          <ListGroupItem>Interests: {this.props.interests}</ListGroupItem>
          <OverlayTrigger
            trigger={['hover', 'focus']}
            placement="right"
            overlay={popoverHoverFocus}
          >
          <Button>Match With This Person</Button>
          </OverlayTrigger>
        </ListGroup>
      </div>
    )
  }
}

export default UserWindow;
