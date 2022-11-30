import React, { Component } from "react";

export default class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entrerTodo: "",
      todo: [],
    };
  }

  changeTodo(event) {
    this.setState({
      entrerTodo: event.target.value,
    });
  }

  ajouteTodo(event) {
    event.preventDefault();
    this.setState({
      entrerTodo: "",
      todo: [...this.state.todo, this.state.entrerTodo],
    });
  }

  effaceTodo(todos) {
    let index = this.state.todo.indexOf(todos);
    let listTodo = [...this.state.todo];
    listTodo.splice(index, 1);
    this.setState({
      todo: listTodo,
    });
  }

  renduTodo() {
    return this.state.todo.map((todos) => {
      return (
        <div className=" d-flex flex-row justify-content-center" key={todos}>
          <div className="btn btn-light m-2 w-25">{todos}</div>
          <button
            className=" m-2 btn btn-danger"
            onClick={() => this.effaceTodo(todos)}>
            X
          </button>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <form className=" d-flex flex-column align-items-center">
          <input
            className=" m-2 input-group-text p-2"
            type="text"
            placeholder="entrer le todo"
            value={this.state.entrerTodo}
            onChange={this.changeTodo.bind(this)}
          />
          <button
            onClick={this.ajouteTodo.bind(this)}
            className="btn btn-info m-2 w-25">
            Ajouter
          </button>
        </form>
        <div className=" container-img-fluid">
          <div>{this.renduTodo()}</div>
        </div>
      </div>
    );
  }
}
