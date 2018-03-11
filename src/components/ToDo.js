import React, { Component } from 'react';

class ToDo extends Component {
    render() {
        return (
            <li>
                <input
                    type="checkbox"
                    checked={this.props.isCompleted}
                    onChange={this.props.toggleComplete}
                />
                <span>{this.props.description}</span>
                &nbsp;<button onClick={this.props.deleteToDo}>Delete</button>
            </li>
        );
    }
}

export default ToDo;
