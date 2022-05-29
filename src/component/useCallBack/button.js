import React from 'react'

export const Button = (props) => {
   console.log('button component render');
  return (
    <button className=' bg-purple-400 text-gray-800 px-3 py-1 mx-1' onClick={props.handleClick}>{props.children}</button>
  )
}
