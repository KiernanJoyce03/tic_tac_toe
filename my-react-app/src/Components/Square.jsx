import React from 'react'
import './Square.css'

const Square = ({value, onClick}) => {

  return (
    <div>
        <button className ="Square" onClick={onClick}> {value === null? "" : value }</button>
    </div>
  )
}

export default Square