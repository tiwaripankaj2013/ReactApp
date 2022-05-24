import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import {decrement,increment} from '../../actions/index';
export const CounterRedux = () => {
  const myState = useSelector((state) => state);
  const dispatch = useDispatch();
  const increment = () =>{
    dispatch({type:'INCREMENT'});
  }
  const decrement = () =>{
    dispatch({type:'DECREMENT'});
  }
  return (
    <div className="bg-gray-50 max-w-md mx-auto">
      <div className="flex">
        <button className="bg-blue-800 w-10 rounded-sm text-lg p-1" onClick={increment}>+</button>
        <input type="number" value={myState} />
        <button className=" bg-blue-800 w-10 rounded-sm text-lg p-1" onClick={decrement}>-</button>
      </div>
    </div>
  );
};
