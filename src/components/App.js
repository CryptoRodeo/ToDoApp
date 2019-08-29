import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
// import todo_list from './Todo_object.js';
import CreateTodo from './CreateTodo.js';
import TodoList from "./TodoList.js";


const todo_list = {
  tasks: [],
  loc_stor_key: "todos",
  populate()
  {
      this.tasks = this.get();
  },
  get()
  {
      try { return JSON.parse(localStorage.getItem(this.loc_stor_key)) || [] } //Retrieve data from local storage
      catch (e) { console.log(e); }
      return [];
  },
  save()
  {
      localStorage.setItem(this.loc_stor_key, JSON.stringify(this.tasks)); //Store items in local storage
  },
  toggle(id)
  {
      let task = this.tasks[id];
      task.isCompleted = !task.isCompleted; //invert
      this.save();
  },
  add(obj)
  {
      this.tasks.push(obj);
      this.save();
  },
  remove(id)
  {
      this.tasks.splice(id,1);
      this.save();
  },
  update(id, new_task)
  {
      let todo = this.tasks[id];
      todo.task = new_task;
      this.save();
  }
};

todo_list.populate();


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
        <h1>ToDo</h1>
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