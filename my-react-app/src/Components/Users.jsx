import React from 'react'
import { useState } from 'react'
import './Users.css'

const Users = ({userName,playerTurn, setUserName}) => {
    const [isEditable, setIsEditable] = useState(false);
    
    

    const handleEditClick = () => {
        setIsEditable(true);
    }
    const handleChange = (e) => {
        setUserName(e.target.value);
    }
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setIsEditable(false);
        }
    }

  return (
    <div className={playerTurn ? 'HighlightUser' : 'User'}>
        <input className='user-input' type="text" value={userName} 
            readOnly={!isEditable} onChange={handleChange} onKeyDown={handleKeyDown}
            style={{border: isEditable ? '2px solid #89a4fd' : 'none',
                borderRadius: '5px', outline: 'none', 
                backgroundColor: isEditable ? '#232323ff' : 'transparent'
            }}/>
        
        <button className='edit-button' onClick={handleEditClick}>Edit</button>
    </div>
  )
}

export default Users