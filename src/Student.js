import React from 'react'
import HighOrderCmp from './HOC'

const Student =(props)=>{
    
  return (
    <div>
      <h1>Student:{props.inc}</h1>
      <button onClick={props.HandleClick}>+</button>
    </div>
  )
}

export default HighOrderCmp(Student)
