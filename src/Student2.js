import React from 'react'
import HighOrderCmp from './HOC'


const Student2 =(props)=> {
  return (
    <div>
      <h1>Student2:{props.inc}</h1>
      <button onClick={props.HandleDec}>+</button>
    </div>
  )
}

export default HighOrderCmp(Student2)
