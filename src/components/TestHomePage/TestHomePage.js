import React, { Component } from 'react';
import fire from '../../config/fire';
import './TestHomePage.css';
import UserSection from '../UserSection/UserSection';
import { Grid, Row, Col } from 'react-bootstrap';
import UserDisplaySection from '../UserDisplaySection/UserDisplaySection';
//import React from 'react'


class TestHomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {    
      willDisplayUsers : false,
      willDisplayProfile : false,
      isCurrentUserInDatabase: false,
      isMounted: false,
      people: []
    }
  }


  // componentDidMount() {
  //   this.authListener();
  //   this.setState({
  //     isMounted : true
  //   });
  //  }

  // authListener() {
  //   this.fireAuthListener = fire.auth().onAuthStateChanged( (user) => {
  //     if(user) {
        
  //       const currentUserId = fire.auth().currentUser.uid;
  //       const db = fire.database();
  //       const ref = db.ref();
        
  //       ref.child("User").orderByChild("Id").equalTo(currentUserId).once("value", snapshot => {
  //         if(snapshot.val() != null){
  //           this.preventProfileDisplay(); 
  //         }
  //       });

  //     }

  //   })
  // }


  // preventProfileDisplay = () => {

  //   if(this.state.isMounted){
  //     this.setState({
  //       willDisplayProfile : false
  //     });
  //   }
 
  // }

  logout = e => {
    e.preventDefault();
    fire.auth().signOut();
  }

  handleDisplayUsers = e => {
    e.preventDefault();
    this.setState({
      willDisplayUsers: !(this.state.willDisplayUsers),
      willDisplayProfile: this.state.willDisplayUsers
      
    });
  }

  handleProfileDisplay = e => {
    e.preventDefault();
    this.setState({
      willDisplayProfile: !(this.state.willDisplayProfile),
      willDisplayUsers: this.state.willDisplayProfile
    });
  }

  render() {

    return (
      <div>
        <Grid>
          <Row>
            <Col md={2.5}>
              <button className="mainButtons" onClick={this.logout}>Logout</button> <br />
              <button className="mainButtons" onClick={this.handleDisplayUsers}>View Potential RoomMates</button> <br />
              <button className="mainButtons" onClick={this.handleProfileDisplay}>Your Profile</button> <br />
            </Col>
            <Col md={9.5}>
              <div className="headers">
              <h1>RoomMatch</h1> <br/>
              <h2><small>Helping you find your Perfect HouseMate</small></h2> <br/>

              </div>  
              {this.state.willDisplayUsers ? <UserDisplaySection/>: null}
              {this.state.willDisplayProfile ? <UserSection /> : null}              
            </Col>
          </Row>

        </Grid>

        
      </div>
    );
  }
}

export default TestHomePage;