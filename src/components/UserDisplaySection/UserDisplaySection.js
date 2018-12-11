import React, { Component } from 'react';
import fire from '../../config/fire';
import UserWindow from '../UserWindow/UserWindow';


class UserDisplaySection extends Component {

  constructor(props) {

    super(props);
    this.state = {
      people: []
    }

  }

  componentDidMount() {
    this.loadData();
  }

  logout = e => {
    e.preventDefault();
    fire.auth().signOut();
  }

  loadData = () => {
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
          "interests": currentStudent.Interests
        }
        currentState.push(user);

      });
    });

    this.setState({
      people: currentState
    });

    console.log(this.state);
  }

  render() {

    let people = this.state.people;
    let renderData = people.map( (person) => 
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
        {renderData}
      </div>
    )
  }
}

export default UserDisplaySection;
