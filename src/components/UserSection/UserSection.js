import React, { Component } from 'react';

 class UserSection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      course: "",
      location: "",
      interests: ""
    }
  }

  handleChange =(e) => {
    this.setState({ [e.target.name]: e.target.value });
  }


  render() {
    
    const header1 = "Enter your details";

    return (
      <div>
        {header1}
         <form id="info">
					<label>Name</label>
						<input onChange={this.handleChange} type="text" placeholder="Enter Name" name="name" id="name"/>
						<br>
						</br>
				
					<label>Age</label>
						<input onChange={this.handleChange} type="age" placeholder="Enter Age" name="age" id="age"/>
						<br>
						</br>
				
					<label>Course</label>
						<input onChange={this.handleChange}  type="text" placeholder="Enter Course" name="course" id="course"/>
						<br>
						</br>
					<label>Location</label>
						
						<input onChange={this.handleChange}  type="location" placeholder="Enter Location" name="location" id="location"/>
						<br>
						</br>
					<label>Intrests</label>
				
						<input  onChange={this.handleChange}type="text" placeholder="Enter Intrests" name="intrests" id="intrests"/>
						<br>
						</br>   
						<button type="submit" >Submit</button>
						
					</form>

        <h1>{this.state.name}</h1> {/* This renders the state.name to the screen */}
        <h2>{this.state.age}</h2>

      </div>
    )
  }
}
export default UserSection;
