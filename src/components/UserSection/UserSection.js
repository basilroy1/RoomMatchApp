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

 Submit(event) {
        event.preventDefault();
        console.log(this.state.name);
        console.log(this.state.age);
        console.log(this.state.course);
        console.log(this.state.location);
        console.log(this.state.interests);
    }

  render() {
    
    const header1 = "Enter your details";

    return (
      <div>
        {header1}
         <form onSubmit={this.Submit.bind(this)} id="info" style={{marginLeft:200}}>
					<label>Name</label>
						<input onChange={this.handleChange} type="text" placeholder="Enter Name" name="name" id="name"/>
						<br></br>
                        <br></br>
					<label>Age</label>
						<input onChange={this.handleChange} type="age" placeholder="Enter Age" name="age" id="age"/>
						<br></br>
                        <br></br>
					<label>Course</label>
						<input onChange={this.handleChange}  type="text" placeholder="Enter Course" name="course" id="course"/>
						<br></br>
                        <br></br>
					<label>Location</label>
						<input onChange={this.handleChange}  type="location" placeholder="Enter Location" name="location" id="location"/>
						<br></br>
                        <br></br>
					<label>Intrests</label>
						<input onChange={this.handleChange}type="text" placeholder="Enter Intrests" name="intrests" id="intrests"/>
						<br></br>   
            <br></br>
						<button style={{marginLeft:100}} type="submit" >Submit</button>
					</form>

      </div>
    )
  }
}
export default UserSection;
