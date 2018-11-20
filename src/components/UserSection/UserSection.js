import React, { Component } from 'react';
import fire from '../../config/fire';
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
  
 Submit=(e)=> {
    e.preventDefault();
    var ref=fire.database().ref('User');
    var newRef=ref.push();
    newRef.set({
    Name: this.state.name,
    Age: this.state.age,
    Course: this.state.course,
    Location: this.state.location,
    Intrests: this.state.intrests /* This sends the values for profile info to the database*/
});


/*need to make Functionality for user filling all the fields before submitting*/


        console.log(this.state.name);
        console.log(this.state.age);
        console.log(this.state.course);
        console.log(this.state.location);
        console.log(this.state.intrests);

       
/*Retrieve data from database to the webpage */
        ref.on('value',getData,noData);
        function getData(data){
          var INFO = document.querySelectorAll('cool');
          for(var j=0;j<INFO.length; j++){
            INFO[j].classList.remove();
          }
        
        var user=data.val();
        var keys=Object.keys(user);
        //console.log(keys);
       
        for(var i = 0; i < keys.length;i++){
        var k = keys[i];
       
        var age=user[k].Age;
        var course= user[k].Course;
        var intrests=user[k].Intrests;
        var location=user[k].Location;
        var name=user[k].Name;
        /*
        var g=JSON.stringify(age);
        var g2=JSON.stringify(course);
        var g3=JSON.stringify(intrests);
        var g4=JSON.stringify(location);
        var g5=JSON.stringify(name);
        */
        var s=document.createTextNode("Name : "+name+' ');
        var s2=document.createTextNode("Age : "+age+' ');
        var s3=document.createTextNode("Course : "+course+' ');
        var s4=document.createTextNode("Location : "+location+' ');
        var s5=document.createTextNode("Intrests : "+intrests+' ');
        var r= document.getElementById("lol");
        r.appendChild(s);
        r.appendChild(s2);
        r.appendChild(s3);
        r.appendChild(s4);
        r.appendChild(s5);
        }
        }
      
        function noData(err){
          console.log(err);	
        }

    }
  
  render() {
    
    const header1 = "Enter your details";

    return (
      <div>
        {header1}
         <form onSubmit={this.Submit} id="info" style={{marginLeft:200}}>
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
          <ul className="cool">
          
          <ol id ="lol"></ol>
          </ul>
      </div>

    )
  }
}
export default UserSection;
