import React from 'react'

const WinnerMessage = ({winnerChar}) => {
  return (
    <div>
        <p>The Winner Is Player {winnerChar}</p>
    </div>
  )
}

export default WinnerMessage