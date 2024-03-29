import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {  //We need the constructor() to use this, and to receive the props of the parent.
    super(props)

    // We're going to set the initial state of the Form to be an object with some empty properties, and assign that initial state to this.state
    this.initialState = {
      name: '',
      job: '',
    }

    this.state = this.initialState
  }


  handleChange = event => {
  const { name, value } = event.target

  this.setState({
    [name]: value,
  })
}

submitForm = () => {
  this.props.handleSubmit(this.state)
  this.setState(this.initialState)
}

render() {
  const { name, job } = this.state;

  return (
    <form>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={this.handleChange} />
      <label>Job</label>
      <input
        type="text"
        name="job"
        value={job}
        onChange={this.handleChange} />
        <input type="button" value="Submit" onClick={this.submitForm} />

    </form>
  );
}
}

export default Form;

