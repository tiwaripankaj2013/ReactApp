import React from 'react';
import SearchTodos from './Todo';
import SearchUsers from './userList';

export const HigherOrderComponent = () => {
  return (
    <div>
       <h2>Higher order component</h2>
      <div className='flex'>
         <div className=' w-1/2'>
         <SearchTodos />
         </div>
         <div className=' w-1/2'>
         <SearchUsers />
         </div>
      </div>
    </div>
  )
}
