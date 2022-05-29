import React, { useMemo, useState } from 'react';

export const UseMemoHooks = () => {
const [counter,setCouter] = useState(0);
const [counterTwo,setCouterTwo] = useState(0);

const increment = () =>{
   setCouter(counter +1);
}
const incrementTwo = () =>{
   setCouterTwo(counterTwo +1);
}
// use memo hooks memorize the result 
const isEven = useMemo(()=>{
   let i =0;
   while(i<200000) i++
   return counter %2 ===0
},[counter])
  return (
    <div>
       <div className='mb-4'>
       <button className='inline-block mx-2 bg-blue-800 text-white' onClick={increment}> count {counter}</button>
       <span className='inline-block mx-3 px-1'>{isEven ? 'even' :'odd'}</span>
       </div>
       <div>
       <button className=' bg-violet-800 text-white rounded' onClick={incrementTwo}> count {counterTwo}</button> 
       </div>
    </div>
  )
}
