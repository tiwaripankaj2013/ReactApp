import React,{useCallback, useState} from 'react';
import ChildComponent from './childComponent';

const UseCallBackHooks = () => {
   const [count,setCount] = useState(0);
   const [tasks,setTasks] = useState([]);
   const add = ()=>{
      setCount(count +1);
   }
   // reference value of tasks when parent componnet render then addTasks function
   //  pass it's render again child component  === useCallBack to memorise tasks chenge then children component render
   const addTasks = useCallback(() => {
      setTasks((items)=>[...items,'new task add']);
   },[tasks])
   console.log('parent component render');

  return (
    <div>
      <ChildComponent taskList={tasks} addTask={addTasks} />
      <hr/>
      <p>Count value : {count}</p>
      <button onClick={add}>Add value</button>
    </div>
  )
}

export default UseCallBackHooks;