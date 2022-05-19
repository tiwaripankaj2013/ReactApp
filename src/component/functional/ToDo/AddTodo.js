import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const AddToDo = (props) => {
  const [task, setTask] = useState({ task: "", taskStatus: false });

  const ChangeHandler = (e) => {
    let taskObj = { ...task };
    taskObj.task = e.target.value;
    setTask(taskObj);
  };
  const UpdateTaskStatus = (e) => {
    let taskObj = { ...task };
    taskObj.taskStatus = e.target.checked;
    setTask(taskObj);
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    props.addTask(task);
    setTask({ task: "", taskStatus: false });
  };
  return (
    <form method="post" onSubmit={formSubmitHandler}>
      <div className="flex p-1 justify-center items-center">
        <Input
          className="border border-gray-500 px-2 py-1 w-8/12"
          type="text"
          value={task.task}
          onChange={ChangeHandler}
        />
        <Input
          type="checkbox"
          className="w-1/12"
          value={task.taskStatus}
          checked={task.taskStatus}
          onChange={UpdateTaskStatus}
        />
        <Button label="Add Task" customClass="sm:w-3/12 bg-violet-800 text-white" />
        {false ? (
          <p className="text-sm text-red-700">Add your task </p>
        ) : (
          " "
        )}
      </div>
    </form>
  );
};

export default AddToDo;
