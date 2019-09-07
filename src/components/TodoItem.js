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
                <td>
                    <button onClick={this.editTask.bind(this)}>Save</button>
                    <button className="cancel" onClick={this.alterEditState.bind(this,false)}>Cancel</button>
                </td>
            );
        }
        else
        {
            return (
                <td>
                    <button onClick={this.alterEditState.bind(this,true)}>Edit</button>
                    <button className="delete" onClick={this.deleteTask.bind(this)}>Delete</button>
                </td>
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
                <td>
                    <form onSubmit={this.editTask.bind(this)}>
                        <input ref="task" defaultValue={task} autoFocus />
                    </form>
                </td>
            );
        }
        else
        {
            return (
                <td onClick={this.toggleTask.bind(this)} style={taskStyle}>{task}</td>
            );
        }
    }

    render()
    {
        const {isCompleted} = this.props;
        return (
            <tr className={"task-" + (isCompleted ? "completed":"not-completed")}>
                {this.renderTask()}
                {this.renderEditingSection()}
            </tr>
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