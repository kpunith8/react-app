import React, { Component } from 'react';
import Input from './Input';

class NewApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: 0,
    }

    this.onNameChange = this.onNameChange.bind(this);
    this.onAgeChange = this.onAgeChange.bind(this);
  }

  onNameChange(e) {
    this.setState({ name: e.target.value });
  }

  onAgeChange(e) {
    this.setState({ age: e.target.value });
  }

  render() {
    return (
      <div style={{ marginTop: '100px', marginLeft: '200px' }}>
        <label>Name: </label>
        <br />
        <Input type={'text'} onChange={this.onNameChange} value={this.state.name} backgroundColor={'#abcdef'} textColor={'red'} autofocus />
        <br />
        <label>Age: </label>
        <br />
        <Input type={'number'} onChange={this.onAgeChange} value={this.state.age} backgroundColor={'gray'} textColor={'yellow'} />
        <br />
        <Input type={'radio'} value={'C++'} checked={'checked'} children={'Java'} />
        <br />
        <label>Date: </label>
        <Input type={'date'} />
        <br />
        <Input type="file" name="img" multiple />
        <br />
        <Input type={'submit'} value={'Submit'} backgroundColor={'gray'} textColor={'yellow'} />
      </div>
    );
  }
}

export default NewApp;