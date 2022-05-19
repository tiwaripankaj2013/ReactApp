import React, { useState } from "react";
import { counterContext } from "../useContext/contextData";
import { ChildCounter } from "./chidCountr";
const Counter = () => {
  const [count, SetCount] = useState(0);
 
  const decrement = () => {
    SetCount(parseInt(count) - 1);
  };
  const changeHandler = (e) =>{
     let val =  e.target.value;
     SetCount(val)
  }
  const increment = () => {
    SetCount(parseInt(count) + 1);
  };
  
  return (
   <counterContext.Provider value={{count,SetCount}}>
    <div>
    <p>Functional Component</p>
    <div className="p-6 mx-auto flex max-w-xs justify-center">
      <button
        className={`text-2xl p-2 text-white ${count<=0 ? 'bg-red-700 cursor-not-allowed' :'bg-teal-800 cursor-pointer'}`} disabled={count<=0 ? true :false}
        onClick={decrement}
      >
        -
      </button>
      <div className="px-4 border border-teal-600 text-lg flex items-center">
        <input type="number" value={count} onChange={changeHandler} />
      </div>

      <button
        className=" bg-teal-800 text-2xl p-2 text-white"
        onClick={increment}
      >
        +
      </button>
    </div>
    <ChildCounter />
    </div>
    </counterContext.Provider>
  );
};

export default Counter;
