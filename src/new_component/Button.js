import propTypes from 'prop-types'
import React from 'react'

const Button = ({color, text,onClick}) => {

  return (
    <button onClick={onClick}
    style={{backgroundColor: color}}
     className='btn'>{text}
     </button>
  )
  
}

Button.defaultProps = {
    color: 'steelblue'
}
  Button.propTypes ={
        text: propTypes.string,
        color: propTypes.string,
        onClick: propTypes.func,
    }

export default Button