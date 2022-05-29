import React from 'react'

 const ChildComponent = (props) => {
    console.log('child component called');
  return (
    <div>
       <p>Child Component</p>
      <p>{props.data}</p>
    </div>
  )
}

export default ChildComponent;