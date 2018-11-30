import React, { Component } from 'react';
import { Grid, Row, Col, ListGroup, Button,  ListGroupItem, Popover, OverlayTrigger } from 'react-bootstrap';
import './TestHomePage.css';
import fire from '../../config/fire';

class TestHomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hardCodedPeople: [{name: "Ronan", age:"17", course:"Leaving Cert"},{name: "Evan", age: "20", course: "csse"},{name: "Niamh", age: "19", course: "Geog"},{name: "Ronan", age:"17", course:"Leaving Cert"},{name: "Evan", age: "20", course: "csse"},{name: "Niamh", age: "19", course: "Geog"}],
      people: []
    }
  }

  componentDidMount() {
    const db = fire.database();
    const ref = db.ref('User');
    let currentState = this.state.people;
    const newState = [];
    console.log("State before data fetch --> " + currentState);



    ref.on('value', (snapshot) => {
      snapshot.forEach( (data) => {
        const currentStudent = data.val();
        let user ={
          name: currentStudent.Name,
          age: currentStudent.Age,
          location: currentStudent.Location,
          course: currentStudent.Course,
          interests: currentStudent.Intrests
        }
        currentState.push(user);

      });
      console.log(currentState);
    })
    this.setState({
      people: currentState
    });
  }



  render() {




    const popoverHoverFocus = (
      <Popover id="popover-trigger-hover-focus">
        <strong>Let's Connect!</strong>
      </Popover>
    );

    // TODO: Fix the mapping functionality to render the firebase data to the screen

    let data = [...this.state.hardCodedPeople];
    console.log(data);
    let renderData = data.map((person) =>
    <ListGroup>
      <ListGroupItem key = {person.name}><strong>Name: </strong>{person.name}</ListGroupItem>
      <ListGroupItem key = {person.age}><strong>Age: </strong>{person.age}</ListGroupItem>
      <ListGroupItem key = {person.location}><strong>Location: </strong>{person.location}</ListGroupItem>
      <ListGroupItem key = {person.course}><strong>Course: </strong>{person.course}</ListGroupItem>
      <ListGroupItem key = {person.interests}><strong>Interests: </strong>{person.interests}</ListGroupItem>
      <ListGroupItem>
      <OverlayTrigger
        trigger={['hover', 'focus']}
        placement="right"
        overlay={popoverHoverFocus}
      >
      <Button>Match With This Person</Button>
    </OverlayTrigger>
    </ListGroupItem>
    </ListGroup>

    );

    return (
      <div>
        <Grid>
          <Row >
            <Col className="mainSection" xs={12} md={8}>
              {renderData}
            </Col>
            <Col className="sideSection" md={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat orci ac tortor pharetra, vel egestas sem semper. Vivamus at leo malesuada, lobortis ipsum vitae, blandit metus. Sed a tincidunt tellus, sed cursus est. Mauris arcu urna, consectetur eu est id, vulputate congue sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin elementum, lacus eget auctor blandit, magna justo finibus nibh, et placerat arcu turpis at massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce volutpat ornare urna vel vehicula. Maecenas ac rutrum velit. Aenean eu fermentum sapien.

              Nunc sed elit libero. Integer sed lacus in felis laoreet porta et quis magna. Etiam bibendum augue nec dapibus tincidunt. Maecenas maximus sit amet lectus a ornare. Phasellus id sollicitudin nisl. Proin consectetur rhoncus gravida. Etiam quis feugiat sapien. Donec dignissim ultricies metus, in luctus libero scelerisque a. Cras sit amet sagittis ligula. Cras porttitor nisl in nibh venenatis, ac euismod enim euismod. Aliquam eget erat mi. Suspendisse facilisis ex ac leo molestie finibus.

              Phasellus elementum malesuada dolor, a semper metus dictum a. Quisque eleifend massa in dolor sodales malesuada. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed sollicitudin velit ut ipsum mollis semper. Phasellus tellus velit, pretium nec enim id, posuere dignissim quam. Donec ac ligula nibh. Praesent vitae sollicitudin urna. Nam ut consectetur arcu. Nam est elit, rutrum a pharetra at, vulputate eu ligula. Vivamus sagittis velit mauris, finibus iaculis diam viverra at. Aliquam lobortis ac nunc ac ultrices. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut aliquam semper sem, vitae auctor est cursus sit amet. Nam pulvinar sem a semper pulvinar. Donec eu egestas quam, in vestibulum magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </Col>
          </Row>
        </Grid>



      </div>
    );
  }
}

export default TestHomePage;
