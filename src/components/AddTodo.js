import React, { Component } from 'react';
import { Button, InputGroup } from 'react-bootstrap';

class AddTodo extends Component {
  state = {
    when: new Date().toString(),
    formValues: { text: '', desc: '' }
  }

  handleChange(event) {
    let formValues = this.state.formValues
    let name = event.target.name
    let value = event.target.value
    formValues[name] = value
    this.setState({ formValues })
  }

  handleSubmit(event) {
    if (this.state.formValues['text'] == '') {
      alert("Plase fill in title of Todo")
    } else {
      this.props.actions.addTodo(this.state.formValues['text'],
        this.state.formValues['desc'], this.state.when)
      this.setState({ formValues: { text: '', desc: '' } })
    }
  }

  onKeyDown = e => {
    const { value } = e.target
    if (e.which === 13) {
      this.props.actions.addTodo(value)
    }
  }

  render() {
    return (
      <div className="addContent">
        <h2 className="headTodo">My Todo Lists</h2>
        <input
          className="input"
          name="text"
          placeholder="Add Todo here"
          value={this.state.formValues["text"]}
          onChange={this.handleChange.bind(this)}
        />
        <input
          className="input"
          name="desc"
          placeholder="Add description here"
          value={this.state.formValues["desc"]}
          onChange={this.handleChange.bind(this)}
        />
        <br />
        <button
          className="btn btn-enter"
          type="submit"
          value="Submit"
          onClick={this.handleSubmit.bind(this)}
        >
          Add
        </button>
      </div>
    );
  }
}

export default AddTodo
