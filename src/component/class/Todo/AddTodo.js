import React, { Component } from "react";

export default class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: { task: "", taskStatus: false },
    };
    this.getTask = this.getTask.bind(this);
    this.taskHandler = this.taskHandler.bind(this);
  }
  submitHandler = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state.todo);
    this.setState({ todo: { task: "", taskStatus: false } });
  };
  getTask = (e) => {
    let todoObj = { ...this.state.todo };
    todoObj.task = e.target.value;
    this.setState({ todo: todoObj });
  };
  taskHandler = (e) => {
    let todoObj = { ...this.state.todo };
    todoObj.taskStatus = e.target.checked;
    this.setState({ todo: todoObj });
  };

  render() {
    return (
      <div className="border border-green-600">
        <form method="post" onSubmit={this.submitHandler}>
          <input
            type="text"
            className="p-1 border border-green-900"
            placeholder="Enter your Task"
            name="task"
            value={this.state.todo.task}
            onChange={this.getTask}
          />
          <input
            type="checkbox"
            className="mx-2"
            name="taskStatus"
            value={this.state.todo.taskStatus}
            checked={this.state.todo.taskStatus}
            onChange={this.taskHandler}
          />
          <button className=" bg-green-700 text-white px-3 py-1">
            Add Task
          </button>
        </form>
      </div>
    );
  }
}
