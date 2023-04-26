import React from "react"
const Button = ({color,text}) =>{
    return(
       <button style={{backgroundcolor: color}}
       className='btn'>{text}hey</button> 
    )
}
export default Button;