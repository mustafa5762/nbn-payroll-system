import React from 'react'
import './Textfield.css'

function Textfield({label}) {
  return (
    <div className='flex items-center justify-between'>
        <label className='textfield-label text-primary'>{label}:</label>
        <input className='textfield-input text-primary' type="text" />
    </div>
  )
}

export default Textfield