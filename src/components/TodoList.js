import React, {Component} from "react";
import ToDoItem from "./TodoItem";

export default class TodoList extends Component
{
    renderItems()
    {
        return this.props.todos.map( (task_values, index) => {
            return (
                <ToDoItem
                    key={index}
                    {...task_values}
                    id={index}
                    toggleTask={this.props.toggleTask}
                    editTask={this.props.editTask}
                    deleteTask={this.props.deleteTask}
                />
            )
        });
    }

    render ()
    {
        if(!this.props.todos.length)
        {
            return <p className="no-tasks">Add your first todo!</p>;
        }
        return (
            // <table>
            //     <tbody>
            //         {this.renderItems()}
            //     </tbody>
            // </table>
            <div>
                {this.renderItems()}     
            </div>                   
            );
    }
}