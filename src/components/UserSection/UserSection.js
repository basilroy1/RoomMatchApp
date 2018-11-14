import React, { Component } from 'react'

 class UserSection extends Component {
  render() {
    return (
      <div>
         <form id="info">
					<label>Name</label>
						<input type="text" placeholder="Enter Name" name="name" id="name"/>
						<br>
						</br>
				
					<label>Age</label>
						<input type="age" placeholder="Enter Age" name="age" id="age"/>
						<br>
						</br>
				
					<label>Course</label>
						<input type="text" placeholder="Enter Course" name="course" id="course"/>
						<br>
						</br>
					<label>Location</label>
						
						<input type="location" placeholder="Enter Location" name="location" id="location"/>
						<br>
						</br>
					<label>Intrests</label>
				
						<input type="text" placeholder="Enter Intrests" name="intrests" id="intrests"/>
						<br>
						</br>   
						<button type="submit" >Submit</button>
						
					</form>
      </div>
    )
  }
}
export default UserSection;
