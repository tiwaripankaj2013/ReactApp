import React from "react";
import HOC from "./index";

const TodoList = ({ data }) => {
  let renderTodos = data.map((todo) => {
    return (
      <li className="list-item text-gray-400 mb-2" key={todo.userId}>
          {todo.title}
      </li>
    );
  });
  return (
    <div>
      <ul className=" my-6">{renderTodos}</ul>
    </div>
  );
};

const SearchTodos = HOC(TodoList, "todos","search by Task");

export default SearchTodos;