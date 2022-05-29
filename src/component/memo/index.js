import React, { useState } from 'react';
import ChildComponent from './childComponent';

export const MemoHooks = () => {
   const [count, setCount] = useState(0);
   const [data, setData] = useState(0);
  return (
    <div>
       <p>Use Memo hooks </p>
       <p>{count}</p>
      <ChildComponent data={data} />
      <button className=" bg-teal-900 text-gray-50 px-2 py-1 mx-1.5" onClick={()=>setCount(count + 1)}>count</button>
      <button className=" bg-teal-500 text-gray-100 px-2 py-1" onClick={()=>setData(data + 1)}>Updata Data In Child </button>
    </div>
  )
}
