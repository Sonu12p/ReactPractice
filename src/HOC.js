import React, { useState } from 'react'
import Student from './Student'


function HighOrderCmp(Student) {
   function HighOrder(){
    const[inc, setInc] = useState(10)
    const HandleClick =() =>{
        if(inc<!20){
            setInc(inc+1)
        }
    }
    const HandleDec =() => {
       if(inc>0){
        setInc(inc-1)
       }
    }
    return(
     <Student inc={inc} HandleClick={HandleClick} HandleDec={HandleDec} />
    )
   }

return HighOrder;

}

export default HighOrderCmp
