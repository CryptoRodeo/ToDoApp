import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import todo_list from './Todo_object.js';


class App extends Component{
  constructor(props)
  {
    super(props);

    this.state = {
      todos: todo_list
    };
  }
  render(){
    return(
      <div className="App">
        <h1> Hola Mundo! </h1>
      </div>
    );
  }


  createTask(task)
  {
    task = task.trim() //remove white space
    if(!task){return;}
    todo_list.add({ task, isCompleted: false });
    //Update State
    this.setState({todos:this.state.todos});
  }

  toggleCompletion(taskID)
  {
    todo_list.toggle(taskID);
    this.setState({todos: this.state.todos});
  }

  editTask(taskID, task)
  {
    todo_list.update(taskID, task);
    this.setState({todos: this.state.todos});
  }

  deleteTask(taskID)
  {
    todo_list.remove(taskID);
    this.setState({todo})
  }
}

export default hot(module)(App);