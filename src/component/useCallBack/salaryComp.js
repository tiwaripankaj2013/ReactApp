import React from 'react'

const SalaryComponent = (props) => {
  console.log('salary component render ');
  return (
    <div>
       <h5>{props.data}</h5>
    </div>
  )
}

export default SalaryComponent;