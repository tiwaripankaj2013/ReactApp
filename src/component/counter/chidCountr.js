import React, { useContext } from 'react';
import { counterContext } from '../useContext/contextData';

export const ChildCounter = () => {
  const {count,SetCount} = useContext(counterContext);
  return (
    <div className=" border-gray-900">
      <p className="text-purple-900">Child Counter Component</p>
      <h5>{count}</h5>
      <button className=" bg-blue-700 text-white rounded px-3 py-1" onClick={()=> SetCount(count +1)}>click on increase</button>
      </div>
  )
}
