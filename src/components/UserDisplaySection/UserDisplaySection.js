import React, { Component } from 'react';
import fire from '../../config/fire';
import Loader from 'react-loader-spinner';
import UserWindow from '../UserWindow/UserWindow';


class UserDisplaySection extends Component {

  constructor(props) {

    super(props);
    this.state = {
      people: [],
      dataHasLoaded: false
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
    ref.once('value', (snapshot) => {

      //callback start

      snapshot.forEach( (data) => {
        const currentStudent = data.val();
        let user ={
          "email" : currentStudent.Email,
          "year" : currentStudent.Year,
          "id" : currentStudent.Id,
          "name": currentStudent.Name,
          "age": currentStudent.Age,
          "location": currentStudent.Location,
          "course": currentStudent.Course,
          "interests": currentStudent.Interests
        }
        currentState.push(user);

      });
      this.setState({
        people: currentState,
        dataHasLoaded: true
      });
      

      
    }); //callback end


  }

  render() {

    let people = this.state.people;
    let renderData = people.map( (person) => 
      <UserWindow key={person.id}
        email ={person.email}
        name = {person.name}
        age = {person.age}
        location = {person.location}
        course = {person.course}
        interests = {person.interests}
        year = {person.year}

      />
    );

    let loadingSpinner = <Loader id="loader" type="Plane" color="#570F0F " height="100" width="100" />

    

    return (
      <div>
        {this.state.dataHasLoaded ? renderData : loadingSpinner}
      </div>
    )
  }
}

export default UserDisplaySection;
