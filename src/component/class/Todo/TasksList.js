import React, { Component } from "react";

export default class TasksList extends Component {
  render() {
    let { tasks, handleDelete } = this.props;
    return (
      <div className="flex bg-gray-100">
        <ul className="list-inside">
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="inline-block">{task.task}</span>
              <input
                type="checkbox"
                defaultChecked={task.taskStatus}
                value={task.taskStatus}
                onChange={(event) => this.props.onTaskStatus(index, event)}
              />
              <button
                className="bg-red-700 text-slate-50 px-3 py-1"
                onClick={() => {
                  handleDelete(task.id);
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
