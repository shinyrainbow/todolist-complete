import React, { Component } from 'react';
import { compose } from 'redux'
import { Button, InputGroup } from 'react-bootstrap';
import '../containers/App.css'

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formValues2: { text: '', desc: '' },
      tempTitle: '',
      tempDesc: '',
      currentFilter: 'all',
      disableTitle: true,
      disableDesc: true
    }
  }

  toggleDiv = (id) => {
    return () => this.props.actions.toggleTodo(id);
  }
  handleRemoveTodo = id => {
    return () => this.props.actions.removeTodo(id);
  }

  handleCompleteTodo = id => {
    return () => this.props.actions.completeTodo(id);
  }

  updateTitle(e) {
    this.setState({ tempTitle: e.target.value })
  }
  updateDesc(event) {
    this.setState({ tempDesc: event.target.value })
  }

  changeTitle(id, text) {
    return () => this.props.actions.changeTitle(id, text);
  }

  changeDesc(id, description) {
    //console.log('this desc: ' ,this.state)
    return () => this.props.actions.changeDesc(id, description);
  }

  handleFilter = filter => {
    this.setState({
      currentFilter: filter,
    });
  };

  handleChange(event) {
    let formValues2 = this.state.formValues2;
    let name = event.target.name;
    let value = event.target.value;
    formValues2[name] = value;
    this.setState({ formValues2 })
  }

  handleSubmit(event, id) {
    if (this.state.formValues2['text'] == '') {
      alert("You have no change");
    } else {
      alert('here')
      this.setState({ tempTitle: this.state.formValues2['text'] })
      this.setState({ tempDesc: this.state.formValues2['desc'] })

      this.props.actions.changeTitle(id, this.state.tempTitle,
        this.state.tempDesc);
      console.log(this.state.formValues2.tempTitle);
    }
  }
  render() {
    const { TodoReducer } = this.props;
    const { currentFilter } = this.state;
    const filteredTodos = TodoReducer.filter(({ completed }) => {
      switch (currentFilter) {
        case 'completed':
          return completed;
        case 'active':
          return !completed;
        default:
          return true
      }
    });
    return (
      <div>
        <div className="filter">
          <button className="btn space btn-style" onClick={(e) => { this.handleFilter('completed') }}>what I have completed</button>
          <button className="btn space btn-style" onClick={(e) => { this.handleFilter('active') }}>What I need to do</button>
          <button className="btn space btn-style" onClick={(e) => { this.handleFilter('all') }}>all of my tasks</button>
        </div>
        <div className="">
          <ul >
            {filteredTodos.map((item, i) =>
              <li className="" key={i}>
                <div className="bg">
                  <div className="row list">

                    <div className="done">
                      <button className={item.completed ? 'btn btn-style' : 'btn btn-normal'} onClick={this.handleCompleteTodo(item.id)}>done</button>
                    </div>

                    <div className="word">
                      <span className="">
                        Title : {item.text}
                      </span>
                      <br />
                      <span className="grey">
                        Description : {item.description}
                      </span>
                    </div>
                    <div className="remove">
                      <button className="btn btn-info btn-style right" onClick={this.handleRemoveTodo(item.id)}>remove</button>
                    </div>
                    <div className="edit">
                      <button className="btn btn-info btn-style right" onClick={this.toggleDiv(item.id)} >edit</button>
                    </div>
                  </div>

                  {item.show &&
                    <div className="row list row2">
                      <form>
                        <div className="form-group">
                          <label>ID: {item.id}     </label>
                          <br />
                          <label>Title:</label>
                          <input type="text" defaultValue={item.text} onChange={this.updateTitle.bind(this)} />

                          <button type="submit" className="btn btn-default"
                            disabled={!this.state.tempTitle}
                            onClick={this.changeTitle(item.id, this.state.tempTitle)}
                          >Submit</button>

                          <br />
                          <label>Description:</label>
                          <input type="text"
                            defaultValue={item.description}
                            onChange={this.updateDesc.bind(this)}
                          />
                          <button type="submit" className="btn btn-default"
                            disabled={!this.state.tempDesc}
                            onClick={this.changeDesc(item.id, this.state.tempDesc)}
                          >Submit</button>
                          <br />
                          <label>Date Added : {item.date}</label>
                        </div>
                      </form>
                    </div>

                  }
                </div>
              </li>
            )}
          </ul>
        </div>

      </div>
    );
  }
}

export default List
