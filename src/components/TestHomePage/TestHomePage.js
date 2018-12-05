import React, { Component } from 'react';
import fire from '../../config/fire';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import './TestHomePage.css';
import UserWindow from '../UserWindow/UserWindow';
import UserSection from '../UserSection/UserSection';



class TestHomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {

      hardCodedPeople: [{name: "Evan", age: "20", location: "Parklands", course: "CSSE", interests: "Lorem"},{name: "Evan", age: "20", location: "Parklands", course: "CSSE", interests: "Lorem"},{name: "Evan", age: "20", location: "Parklands", course: "CSSE", interests: "Lorem"},{name: "Evan", age: "20", location: "Parklands", course: "CSSE", interests: "Lorem"}],
      people: []

    }
  }

  componentDidMount() {
    const db = fire.database();
    const ref = db.ref('User');

    let currentState = this.state.people;
    ref.on('value', (snapshot) => {
      snapshot.forEach( (data) => {
        const currentStudent = data.val();
        let user ={
          "name": currentStudent.Name,
          "age": currentStudent.Age,
          "location": currentStudent.Location,
          "course": currentStudent.Course,
          "interests": currentStudent.Intrests
        }
        currentState.push(user);

      });
    });

    this.setState({
      people: currentState
    });

    console.log(this.state);
    
  }
  
  logout = e => { 
    e.preventDefault();
    fire.auth().signOut();
  }


  render() {

    let data = this.state.people;
    // console.log(data);
    let renderData = data.map((person) =>
        <UserWindow 
          name = {person.name}
          age = {person.age}
          location = {person.location}
          course = {person.course}
          interests = {person.interests}
        />

        

    );

    return (
      <div>
        <Button onClick={this.logCurrentUser}>
        Log
        </Button>
        
        <Grid>
          <Row >
            <Col className="mainSection" xs={6} md={5}>
              {renderData}
            </Col>
            <Col className="userSection" md={4}>
              <UserSection />
            </Col>
          </Row>
        </Grid>
        <Button onClick = {this.logout}>Logout</Button>
        



      </div>
    );
  }
}

export default TestHomePage;
