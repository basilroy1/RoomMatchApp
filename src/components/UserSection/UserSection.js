import React, { Component } from 'react';
import fire from '../../config/fire';
import './UserSection.css';
import { Alert } from 'react-bootstrap';

class UserSection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      course: "",
      location: "",
      interests: "",
      year: ""
    }
  }
  handleChange =(e) => {
    this.setState({ [e.target.name]: e.target.value});
    }

   Submit =(e)=> {
    e.preventDefault();
      if(this.state.name==="" || this.state.age==="" || this.state.course==="" || this.state.location==="" || this.state.intrests===""||this.state.year===""){
  // //this.alert3;
    alert("ERRor");
      return;
   }
    
    var ref=fire.database().ref('User'); 
    var newRef=ref.push();
    newRef.set({
      Id: fire.auth().currentUser.uid,
      email: fire.auth().currentUser.email,
      Name: this.state.name,            /* This sends the values for profile info to the database*/
      Age: this.state.age,
      Course: this.state.course,
      Year: this.state.year,
      Location: this.state.location,
      Interests: this.state.intrests 
    
});
    
      ref.on("value",function(snapshot){
     
      snapshot.forEach(function(data){
      var t={
      Name:data.val().Name,
      Age:data.val().Age,
      Year:data.val().Year,
      Course:data.val().Course,
      Location:data.val().Location,
      Interests:data.val().Interests
      }
     
      var name=data.val();/// gets all value from firebase
      var age=t.Age;
      var course=t.Course;
      var location=t.Location;
      var year=t.Year;
      var intrests=t.Intrests;
      var r= document.getElementById("lol");
      console.log(name);
     
      //var b=React.Children.toArray(name);    ///split into array
      var b2=React.Children.toArray(age);
      var b3=React.Children.toArray(course);
      var b4=React.Children.toArray(location);
      var b5=React.Children.toArray(intrests);

     // var s=document.createTextNode("Name : "+b+' ');
      var s2=document.createTextNode("Age : "+b2+' ');
      var s3=document.createTextNode("Course : "+b3+' ');
      var s4=document.createTextNode("Location : "+b4+' ');
      var s5=document.createTextNode("Intrests : "+b5+' ');
    
      /*r.appendChild(s);
      r.appendChild(s2);
      r.appendChild(s3);
      r.appendChild(s4);
      r.appendChild(s5);
*/
      /*for(var i=0;i<b.length;i++){
        c++;
       var d= document.createTextNode(b[i]);
       r.appendChild(d);
        
      }
      */
     // console.log(name,age,course,location,intrests);
/*
      var s=document.createTextNode("Name : "+name+' ');
      var s2=document.createTextNode("Age : "+age+' ');
      var s3=document.createTextNode("Course : "+course+' ');
      var s4=document.createTextNode("Location : "+location+' ');
      var s5=document.createTextNode("Intrests : "+intrests+' ');
     
      r.appendChild(s);
      r.appendChild(s2);
      r.appendChild(s3);
      r.appendChild(s4);
      +
      r.appendChild(s5);
*/
    /*  var tif=Object.keys(users).map(function(item){
        return<li value={item}>{users[item]}</li>
        
          });
*/
         
  });

});

/*Retrieve data from database to the webpage */
      /*  ref.on('value',getData,noData);
        function getData(data){
          var INFO = document.querySelectorAll('cool');
          for(var j=0;j<INFO.length; j++){
            INFO[j].classList.remove();
          }
        
        var user=data.val();
        var keys=Object.keys(user);

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
        */
        this.setState({
        name: "",
        age: "",
        course: "",
        year: "",
        location: "",
        intrests: ""
      });
        document.getElementById("info").reset();//reset value after entered
        
    }
  



/*
run=(interval, frames) =>{
var int = 1;

function func() {
    document.body.id = "b"+int;
    int++;
    if(int === frames) { int = 1; }
}

var swap = window.setInterval(func, interval);
}
*/
 
clickPopUp=()=>{
      
 var close = document.getElementsByClassName("closebtn");//need to hide this pop up a the begining

  for (var i = 0; i < close.length; i++) {
  // When someone clicks on a close button
  close[i].onclick = function(){

    // Get the parent of <span class="closebtn"> 
    var div = this.parentElement;

    // Set the opacity of div to 0 (transparent)
    div.style.opacity = "0";

    // Hide the div after 600ms (the same amount of milliseconds it takes to fade out)
    setTimeout(function(){ div.style.display = "none"; }, 600);
  }
}

}
 
  render() {
    
return (
  
 <div >



    <div className="container2">

 <div  >
  <Alert>

  <span className="closebtn" onClick={this.clickPopUp}>&times;</span>
   
  <h4 className="alert-heading"><strong>Well Done!</strong></h4>
    <p>You successfully Created Your Profile.</p>
  <h4/>
      
  </Alert>
 </div>
    <div className="container2">

    <link href='http://fonts.googleapis.com/css?family=Great+Vibes' rel='stylesheet' type='text/css'></link>
    
<div className="form-group col-md-10">
<form onSubmit={this.Submit} id="info">
<h3 id="header">Profile Details</h3>
        
  <div className="form-row">
    <div className="form-group col-md-6" id = "WineStyling">
      <label htmlfor="inputName" style={{color:"rgb(224, 224, 110)"}}>Name</label>
      <input onChange={this.handleChange} className="form-control" type="text" name="name" placeholder="Enter Name"/>
      {this.state.name ? <span style={{color: "#66cc00"}}>That's Good!</span> :<span style={{color: "#ff0000"}}></span>}
    </div>
    <div className="form-group col-md-6">
      <label htmlfor="inputAge" style={{color:"rgb(224, 224, 110)"}}>Age</label>
      <input onChange={this.handleChange} className="form-control" type="text" id="age" name="age" placeholder="Enter Age"/>
      {this.state.age ? <span style={{color: "#66cc00"}}>That's Good!</span> :<span style={{color: "#ff0000"}}></span>}

    </div>
  </div>
  <div className="form-group">
    <label htmlfor="inputLocation" style={{color:"rgb(224, 224, 110)"}}>Location</label>
    <input onChange={this.handleChange} className="form-control" type="text" id="location" name="location" placeholder="Enter Location"/>
    {this.state.location ? <span style={{color: "#66cc00"}}>That's Good!</span> :<span style={{color: "#ff0000"}}></span>}

  </div>
  <div className="form-group">
    <label htmlfor="inputYear" style={{color:"rgb(224, 224, 110)"}}>Year</label>
    <input onChange={this.handleChange} className="form-control" type="text" id="year" name="year" placeholder="Enter College Year"/>
    {this.state.year ? <span style={{color: "#66cc00"}}>That's Good!</span> :<span style={{color: "#ff0000"}}>Please Enter Year</span>}

  </div>
  <div className="form-row">
  <div className="form-form-group col-md-6">
    <label htmlfor="inputCourse" style={{color:"rgb(224, 224, 110)"}}>Course</label>
    <input onChange={this.handleChange} className="form-control" type="text" id="course" name="course" placeholder="Enter Course"/>
    {this.state.course ? <span style={{color: "#66cc00"}}>That's Good!</span> :<span style={{color: "#ff0000"}}></span>}

  </div>
  
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlfor="inputIntrests" style={{color:"rgb(224, 224, 110)"}}>Interests</label>
      <input onChange={this.handleChange} className="form-control" type="text" name="intrests" id="intrests" placeholder="Enter Interests"/>
      {this.state.intrests ? <span style={{color:"#66cc00"}}>That's Good!</span> :<span style={{color: "#ff0000"}}></span>}
    </div>
    </div>
</div>
{/* <button className="btn btn-primary" type="submit"id="button" >Save</button> */}
<a href="button" class="btn btn-primary btn-success"><span class="glyphicon glyphicon-floppy-disk"></span> Save Details</a>
		</form>
    
</div>
 </div>
 </div>
 </div>

    );
    
  }
}
export default UserSection;
