import React from 'react'

export const Input = (props) => {
  return (
    <input type={props.type} className={props.className} value={props.inputvalue} {...props} />
  )
}
