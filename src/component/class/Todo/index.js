import React, { Component } from "react";
import TasksList from './TasksList';
import AddTodo from './AddTodo';

export default class ToodoTaskClassComponent extends Component {
   constructor(){
      super()
      this.state = {
         todos: []
       }
   }
    handleAddTodo = (todoDetails) => {
      let todoArr = [...this.state.todos];
      todoArr.push(todoDetails);
      this.setState({todos:todoArr});
    };
   handleDeleteClass = (index) => {
      let todoArr = [...this.state.todos];
      todoArr.splice(index, 1);
      this.setState( {todos:todoArr});
    };
     taskStatusClass = (index, event) => {
      let todoArr = [...this.state.todos];
      todoArr[index].taskStatus = event.target.checked;
      this.setState({todos:todoArr});
    };
   render(){
      return(
         <div className="w-8/12">
          <p>Todo with class component </p>
          {this.state.todos.length > 0 ? (
            <TasksList handleDelete={this.handleDeleteClass} tasks={ this.state.todos } onTaskStatus={this.taskStatusClass} />
          ) : (
            <p className="text-lg text-blue-500"> No any pending task</p>
          )}
          <AddTodo addTodo={this.handleAddTodo} />
        </div>
      )
   }
   
}