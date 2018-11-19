import React, { Component } from 'react';
import { FormGroup,FormControl, ControlLabel, Button } from 'react-bootstrap';
import fire from '../../config/fire';


class PasswordResetModal extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    }
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  sendPasswordReset = (e) => {
    fire.auth().sendPasswordResetEmail(this.state.email)
    .then( () => {
      alert("We have sent you an email with instructions to reset your password!");
    })
  }

  getValidationState = () => {
    const email = this.state.email;
    const validEmail = email.endsWith("@mumail.ie") || email.endsWith("@mu.ie");

    if(validEmail)
      return "success";
    if (email.endsWith("@"))
      return "warning";
    else
      return "error";
  }


  render() {
    return (
      <div>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
        <ControlLabel>Working example with validation</ControlLabel>

        <FormControl
            type="text"
            name="email"
            placeholder="Enter your Maynooth Universiy email address!"
            onChange={this.handleChange}
        />

        <Button bsStyle="primary" onClick={this.sendPasswordReset}>Reset your password</Button>
          
        </FormGroup>
      </div>
    )
  }
}

export default PasswordResetModal;