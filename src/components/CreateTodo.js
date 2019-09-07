import React, {Component} from "react";

export default class CreateTodo extends Component
{
    render()
    {
        return (
            <form onSubmit={this.onSubmit.bind(this)} class="createTodoForm">
                <div id="inputContainer">
                    <input type="text" placeholder="Task" ref="taskDetails" autoFocus/>
                    <button></button>
                </div>
            </form>
        );
    }
    onSubmit(e)
    {
        //get the value from the input
        this.props.createTask(this.refs.taskDetails.value);
        //Clear input
        this.refs.taskDetails.value="";
        //Prevent page reset.
        e.preventDefault();
    }
}