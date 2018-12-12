import React, { Component } from 'react';
import fire from '../../config/fire';
import './TestHomePage.css';
import UserSection from '../UserSection/UserSection';
import Loader from 'react-loader-spinner';
import UserDisplaySection from '../UserDisplaySection/UserDisplaySection';

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
  // }

  componentWillUnmount(){

    this.fireAuthListener = undefined;

  }

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
        <div className="headers">
          <h1>RoomMatch</h1> <br/>
        </div>
        
        


        <button className="mainButtons" onClick={this.logout}>Logout</button> <br />
        <button className="mainButtons" onClick={this.handleDisplayUsers}>View Potential RoomMates</button> <br />
        <button className="mainButtons" onClick={this.handleProfileDisplay}>Your Profile</button> <br />
        {this.state.willDisplayUsers ? <UserDisplaySection/>: null}
        {this.state.willDisplayProfile ? <UserSection /> : null}
        
      </div>
    );
  }
}

export default TestHomePage;