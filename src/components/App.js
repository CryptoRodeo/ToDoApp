import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import todo_list from './Todo_object.js';


class App extends Component{
  constructor(props)
  {
    super(props);

    this.state = {
      todos: todo_list;
    }
  }
  render(){
    return(
      <div className="App">
        <h1> Hola Mundo! </h1>
      </div>
    );
  }
}

export default hot(module)(App);