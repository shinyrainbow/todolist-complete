import React , {Component} from 'react';
import { Button,InputGroup } from 'react-bootstrap';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as todoActions from '../actions/actionTypes'
import './App.css'
import AddTodo from '../components/AddTodo'
import List from '../components/List';
import './App.css'

const App =({TodoReducer, actions}) => (

      <div className="content">
        <AddTodo
          TodoReducer ={TodoReducer}
          actions = {actions}
        />
        <List actions = {actions} TodoReducer={TodoReducer}  />
      </div>
);

const mapStateToProps = ({ TodoReducer }) => ({
  TodoReducer,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(todoActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
