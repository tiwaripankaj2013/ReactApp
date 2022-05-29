import React from 'react'

const AgeComponent = (props) => {
   console.log(' age component render ');
  return (
    <div>
       <h4>{props.data}</h4>
    </div>
  )
}

export default AgeComponent