import React, {Component} from "react";

export default class CreateTodo extends Component
{
    render()
    {
        return (
            <form onSubmit={this.onSubmit.bind(this)} className="createTodoForm">
                <input type="text" placeholder="Task" ref="taskDetails" autoFocus/>
                <button>Add Task</button>
            </form>
        );

        onSubmit(e)
        {
            this.props.createTask(this.refs.taskDetails.value);

            //Clear input
            this.ref.taskDetails.value="";

            e.preventDefault();
        }
    }
}