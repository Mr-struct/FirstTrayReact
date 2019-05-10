import React, { Component } from "react";

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      items: []
    };
  }

  onChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }

  addTodo(event) {
    if (this.state.userInput) {
      event.preventDefault();
      this.setState({
        items: [...this.state.items, this.state.userInput],
        userInput: ""
      });
    } else {
      alert("le champ est vide !");
    }
  }

  deleteTodo(event) {
    event.preventDefault();
    const array = this.state.items;
    const index = array.indexOf(event.target.value);
    array.splice(index, 1);
    this.setState({
      items: array
    });
  }

  renderTodo() {
    return this.state.items.map(x => {
      return (
        <li className="list-group-item" key={x}>
          <button
            className="btn btn-danger"
            onClick={this.deleteTodo.bind(this)}
          >
            X
          </button>{" "}
          | <strong>{x}</strong>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <h1 align="center">My todo List</h1>
        <form className="form-row align-items-center">
          <input
            className="form-control mb-2"
            value={this.state.userInput}
            type="text"
            onChange={this.onChange.bind(this)}
            placeholder="Ajouter un todo"
          />
          <button className="btn btn-primary" onClick={this.addTodo.bind(this)}>
            Ajouter
          </button>
        </form>
        <br />
        <ul className="list-group">{this.renderTodo()}</ul>
      </div>
    );
  }
}

export default TodoList;
