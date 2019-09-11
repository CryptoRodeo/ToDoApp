import React, {Component} from "react";

export default class TodoItem extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            currentlyEditing: false
        };
    }

    renderEditingSection()
    {
        if(this.state.currentlyEditing)
        {
            return (
                <div>
                    <button onClick={this.editTask.bind(this)}>Save</button>
                    <button className="cancel" onClick={this.alterEditState.bind(this,false)}>Cancel</button>
                </div>
            );
        }
        else
        {
            return (
                <div>
                    <button onClick={this.alterEditState.bind(this,true)}>Edit</button>
                    <button className="delete" onClick={this.deleteTask.bind(this)}>Delete</button>
                </div>
            );
        }
    }

    renderTask()
    {
        const {task, isCompleted } = this.props;
        const taskStyle = {cursor:"pointer"};

        if(this.state.currentlyEditing)
        {
            return (
                    <form onSubmit={this.editTask.bind(this)}>
                        <input ref="task" defaultValue={task} autoFocus />
                    </form>
            );
        }
        else
        {
            return (

                <form onSubmit={this.editTask.bind(this)}>
                        <input ref="task" defaultValue={task} style={taskStyle} autoFocus disabled/>
                </form>


                // <td onClick={this.toggleTask.bind(this)} style={taskStyle}>{task}</td>
            );
        }
    }

    render()
    {
        const {isCompleted} = this.props;
        return (
            <div className={"task-" + (isCompleted ? "completed":"not-completed")}>
                {this.renderTask()}
                {this.renderEditingSection()}
            </div>
        );
    }

    alterEditState(currentlyEditing){
        this.setState({
            currentlyEditing
        });
    }

    toggleTask()
    {
        this.props.toggleTask(this.props.id);
    }

    editTask(e)
    {
        this.props.editTask(this.props.id, this.refs.task.value);

        this.setState({
            currentlyEditing: false
        });
        e.preventDefault();
    }

    deleteTask()
    {
        this.props.deleteTask(this.props.id);
    }
}