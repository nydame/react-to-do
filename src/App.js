import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                { description: 'Walk the cat', isCompleted: true },
                { description: 'Throw the dishes away', isCompleted: false },
                { description: 'Buy new dishes', isCompleted: false },
            ],
            newTodoDescription: '',
        };
    }
    // unbound
    handleChange(e) {
        this.setState({ newTodoDescription: e.target.value });
    }
    // unbound
    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.newTodoDescription.trim()) {
            return;
        }
        const newTodo = {
            description: this.state.newTodoDescription,
            isCompleted: false,
        };
        this.setState({
            todos: [...this.state.todos, newTodo],
            newTodoDescription: '',
        });
    }

    // define props here
    // Event handler to change isCompleted for todo in question
    toggleComplete(index) {
        // create a brand new copy of state.todos using slice()
        const todos = this.state.todos.slice();
        // in the new copy, find the todo item of interest...
        const todo = todos[index];
        // ...and toggle the value of isCompleted
        todo.isCompleted = !todo.isCompleted;
        // finally tear up the old state.todos and replace it with the updated copy
        this.setState({ todos: todos });
    }

    deleteToDo(index) {
        console.log('Delete me!');
        console.log(this.state.todos);
        const updatedToDos = this.state.todos.filter(
            todo => todo !== this.state.todos[index]
        );
        console.log(updatedToDos);
        this.setState({ todos: updatedToDos });
    }

    render() {
        return (
            <div className="App">
                <ul>
                    {this.state.todos.map((todo, index) => (
                        <ToDo
                            key={index}
                            description={todo.description}
                            isCompleted={todo.isCompleted}
                            toggleComplete={() => this.toggleComplete(index)}
                            deleteToDo={() => this.deleteToDo(index)}
                        />
                    ))}
                </ul>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <input
                        type="text"
                        value={this.state.newTodoDescription}
                        onChange={e => this.handleChange(e)}
                    />
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default App;
