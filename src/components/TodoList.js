import React, {Component} from "react";
import ToDoItem from './TodoItem.js';

export default class TodoList extends Component
{
    renderItems()
    {
        return this.props.todos.map( (c, index) => {
            return (
                <TodoItem
                    key={index}
                    
                    {...c}

                    id={index}

                    toggleTask={this.props.toggleTask}
                    editTask={this.props.editTask}
                    deleteTask={this.props.deleteTask}
                />
            );
        })
    }

    render()
    {
        if(!this.props.todos.length)
        {
            return <p className="no-tasks">Add your first todo!</p>
        }
        else
        {
            return (
                <table>
                    <tbody>
                        {this.renderItems()}
                    </tbody>
                </table>

            );
        }
    }
}