import React, { Component } from 'react';
import fire from '../../config/fire';
import './UserSection.css';
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
  
 Submit =(e)=> {
    e.preventDefault();
    var ref=fire.database().ref('User'); 
    var newRef=ref.push();
    newRef.set({
      Id: fire.auth().currentUser.uid,
      Name: this.state.name,            /* This sends the values for profile info to the database*/
      Age: this.state.age,
      Course: this.state.course,
      Location: this.state.location,
      Interests: this.state.intrests 
});
/*need to make Functionality for user filling all the fields before submitting*/
      var that=this;
      ref.on("value",function(snapshot){
     
        snapshot.forEach(function(data){
      var t={
      Name:data.val().Name,
      Age:data.val().Age,
      Course:data.val().Course,
      Location:data.val().Location,
      Interests:data.val().Interests
      }
     
      var name=data.val();/// gets all value from firebase
      var age=t.Age;
      var course=t.Course;
      var location=t.Location;
      var intrests=t.Intrests;
      var r= document.getElementById("lol");
      console.log(name);
     
      //var b=React.Children.toArray(name);    ///split into array
      var b2=React.Children.toArray(age);
      var b3=React.Children.toArray(course);
      var b4=React.Children.toArray(location);
      var b5=React.Children.toArray(intrests);

      //console.log(b[1]+" "+b2[1]+" "+b3[1]+" "+b4[1]+" "+b5[1]);

     // var s=document.createTextNode("Name : "+b+' ');
      var s2=document.createTextNode("Age : "+b2+' ');
      var s3=document.createTextNode("Course : "+b3+' ');
      var s4=document.createTextNode("Location : "+b4+' ');
      var s5=document.createTextNode("Intrests : "+b5+' ');
    
      //r.appendChild(s);
      r.appendChild(s2);
      r.appendChild(s3);
      r.appendChild(s4);
      r.appendChild(s5);

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
  render() {

return (
 
    <div className="container2">
    <link href='http://fonts.googleapis.com/css?family=Great+Vibes' rel='stylesheet' type='text/css'></link>
    <h3 id="header">Profile Details</h3>
<div className="form-group col-md-10">
<form onSubmit={this.Submit} id="info">
        
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlfor="inputName" style={{color:"rgb(224, 224, 110)"}}>Name</label>
      <input onChange={this.handleChange}  className="form-control" type="name" id="name" name="name" placeholder="Enter Name"/>
      {this.state.name ? <span style={{color: "#66cc00"}}>That's Good!</span> :<span style={{color: "#ff0000"}}>Please Enter Name</span>}

    </div>
    <div className="form-group col-md-6">
      <label htmlfor="inputAge" style={{color:"rgb(224, 224, 110)"}}>Age</label>
      <input onChange={this.handleChange} className="form-control" type="age" id="age" name="age" placeholder="Enter Age"/>
      {this.state.age ? <span style={{color: "#66cc00"}}>That's Good!</span> :<span style={{color: "#ff0000"}}>Please Enter Age</span>}

    </div>
  </div>
  <div className="form-group">
    <label htmlfor="inputLocation" style={{color:"rgb(224, 224, 110)"}}>Location</label>
    <input onChange={this.handleChange} className="form-control" type="text" id="location" name="location" placeholder="Enter Location"/>
    {this.state.location ? <span style={{color: "#66cc00"}}>That's Good!</span> :<span style={{color: "#ff0000"}}>Please Enter Location</span>}

  </div>
  <div className="form-row">
  <div className="form-form-group col-md-6">
    <label htmlfor="inputCourse" style={{color:"rgb(224, 224, 110)"}}>Course</label>
    <input onChange={this.handleChange} className="form-control" type="text" id="course" name="course" placeholder="Enter Course"/>
    {this.state.course ? <span style={{color: "#66cc00"}}>That's Good!</span> :<span style={{color: "#ff0000"}}>Please Enter Course</span>}

  </div>
  
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlfor="inputIntrests" style={{color:"rgb(224, 224, 110)"}}>Interests</label>
      <input onChange={this.handleChange} className="form-control" type="text" name="intrests" id="intrests" placeholder="Enter Interests"/>
      {this.state.intrests ? <span style={{color:"#66cc00"}}>That's Good!</span> :<span style={{color: "#ff0000"}}>Please Enter Interests</span>}
    </div>
    </div>
</div>
<button className="btn btn-primary" type="submit"id="button" >Save</button>
		</form>
    
          
          </div>
          <div id="lol">
         
          </div>
          </div>

    )
  }
}
export default UserSection;
