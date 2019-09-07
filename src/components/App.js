import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import todo_list from './Todo_object.js';
import CreateTodo from './CreateTodo.js';
import TodoList from "./TodoList.js";


export default class App extends Component{
  constructor(props)
  {
    super(props);
    this.state = {
      todos: todo_list.tasks
    };
  }
  render(){
    return(
      <div className="App">
        <div id="img-container">
          <img src="./img/person.png"/>
        </div>
        <h1>Taskify</h1>
        <CreateTodo
          createTask={this.createTask.bind(this)}
        />
        <TodoList
          todos={this.state.todos}
          toggleTask={this.toggleCompletion.bind(this)}
          editTask={this.editTask.bind(this)}
          deleteTask={this.deleteTask.bind(this)}
        />
      </div>
    );
  }

  //Class methods
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
    this.setState({todos: this.state.todos});
  }
}