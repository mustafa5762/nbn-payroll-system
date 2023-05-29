import React from 'react'
import './Button.css'

function Button({label,type}) {
  return (
    <button type={type} className='button bg-primary text-secondry'>{label}</button>
  )
}

export default Button