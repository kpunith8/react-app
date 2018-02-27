import React from 'react';
import { Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';

class FormValidation extends React.Component {
  constructor() {
    super();

    this.state = {
      isEmailValid: false,
      isPasswordValid: false,
    };

    this.onEmail = this.onEmail.bind(this);
    this.onPass = this.onPass.bind(this);
  }

  onEmail(e) {
   var email = e.target.value;

   if(email.length > 2) {
     this.setState({ isEmailValid: true });
   }
  }

  onPass(e) {
    var password =  e.target.value;
    if(password.length > 2) {
      this.setState({ isPasswordValid: true });
    }
  }

  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Input with success</Label>
          <Input valid = {this.state.isEmailValid} onChange={this.onEmail}/>
          {!this.state.isEmailValid ? <h3> Please check the email </h3> : ''}
          <FormText>Example help text that remains unchanged.</FormText>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Input with danger</Label>
          <Input valid={this.state.isPasswordValid}  onChange={this.onPass}/>
          <FormFeedback>Oh noes! that name is already taken</FormFeedback>
          <FormText>Example help text that remains unchanged.</FormText>
        </FormGroup>
      </Form>
    );
  }
}

export default FormValidation;
