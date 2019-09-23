import React, {Component} from "react";

export default class CreateTodo extends Component
{
    render()
    {
        return (

		<div>
			<form id="primary-input-form" onSubmit={this.onSubmit.bind(this)} className="createTodoForm">
	            <div id="inputContainer">
	                <input id="primary-input" type="text" placeholder="Task" ref="taskDetails" autoFocus/>
                    <button id="primary-input-button"><i className="fa fa-plus"></i></button>
                </div>
	        </form>
		</div>
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
