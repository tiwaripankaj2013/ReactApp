import React,{useState} from "react";
import AddToDo from "./AddTodo";
import { ToDoList } from "./TodoList";



const TodoFunctionalComponent = () => {

  const [tasksList, setTaskList] = useState([
    { task: "test", taskStatus: false, id: "31" },
    { task: "test2", taskStatus: false, id: "32" },
    { task: "test3", taskStatus: false, id: "33" },
  ]);
  const handleAddTask = (taskDetails) => {
    let taskListArr = [...tasksList];
    taskListArr.push(taskDetails);
    setTaskList(taskListArr);
  };
  const taskStatusHandler = (index, event) => {
    let taskListArr = [...tasksList];
    taskListArr[index].taskStatus = event.target.checked;
    setTaskList(taskListArr);
  };
  const deleteTaskHandler = (index) => {
    let tasksListArr = [...tasksList];
    tasksListArr.splice(index, 1);
    setTaskList(tasksListArr);
  };
  return (
    <div className="border-violet-900 border mt-6 max-w-md">
      <h2 className=" text-lg mb-4 text-violet-900 text-center">
        Create your Task List
      </h2>
      <AddToDo addTask={handleAddTask} />
      {tasksList.length > 0 ? (
        <ToDoList
          tasks={tasksList}
          deleteTask={deleteTaskHandler}
          taskStatus={taskStatusHandler}
        />
      ) : (
        <p className="text-lg text-blue-500"> No any pending task</p>
      )}
    </div>
  );
};

export default TodoFunctionalComponent;