
import { Input } from "../ui/input";

export const ToDoList = (props) => {
  const { tasks, taskStatus,deleteTask } = props;
  return (
    <div className=" border border-gray-500">
      <p className="text-center text-purple-700 text-base mt-1">Task Status</p>
      <ol className="list-decimal ml-5">
        {tasks.map((task, index) => (
          <li className="list-item mb-3" key={index}>
            <span className={`inline-block w-8/12 ${task.taskStatus ? 'line-through decoration-red-700 decoration-2' :''}`}>{task.task}</span>
            <Input
              type="checkbox"
              className="w-1/12"
              value={task.taskStatus}
              defaultChecked={task.taskStatus}
              onChange={(e) => taskStatus(index, e)}
            />
            <button className="w-3/12 bg-red-700 text-white bg-red" onClick={()=>{deleteTask(index)}}>
              Delete
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};
