import React,{memo} from 'react';

const ChildComponent = ({taskList,addTask}) => {

   console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {taskList.map((task, index) => {
        return <p key={index}>{task}</p>;
      })}
      <button onClick={addTask}>Add Todo</button>
    </>
  );
}

export default memo(ChildComponent);