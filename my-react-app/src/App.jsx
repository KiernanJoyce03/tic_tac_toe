import React from 'react'
import Square from './Components/Square'
import Board from './Components/Board'
import './App.css'

const App = () => {
  return (
    <div className='Home'>
      <div className='Header'>
        <h1>Tic Tac Toe</h1>
      </div>
      <Board SquareComponent={Square}></Board>
    </div>
  )
}

export default App