import React from 'react'
import './Reset.css'
const ResetButton = ({onClick}) => {
  return (
    <div>
        <button className='Reset' onClick={onClick}>Reset</button>
    </div>
  )
}

export default ResetButton