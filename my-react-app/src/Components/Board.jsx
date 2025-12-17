import React from 'react'
import './Board.css'
import WinnerMessage from './WinnerMessage'
import ResetButton from './ResetButton'
import { useState } from 'react'
import Users from './Users'




const Board = ({ SquareComponent }) => {

    const [turn, setTurn] = useState(0);
    const [ticTacArr, setTicTacArr] = useState(Array(9).fill(null));
    const [history, setHistory] = useState(Array(9).fill(null));
    const [count, setCount] = useState(0);
    const [playerTurn, setPlayerTurn] = useState(true);

    const boxClick = (i) => {
        if (ticTacArr[i] === null && !checkWinnerHelper()) {
            setHistory(prev => {
                const next = prev.slice();
                next[count] = `${(turn === 1) ? 'x' : 'o'} was placed on row
                                ${Math.floor((i / 3) + 1)} column ${(i % 3) + 1}`;
                setCount(count + 1);
                return next;
            })
            setTicTacArr(prev => {
                const next = prev.slice();
                next[i] = (turn === 1) ? 'x' : 'o';
                return next;
            })
            setPlayerTurn(!playerTurn);
            setTurn((turn + 1) % 2);
        }
    }

    const checkWinnerHelper = () => {
        if (checkWinner('x')) return true;
        else if (checkWinner('o')) return true;
        else return false;
    }
    const checkWinner = (i) => {
        for (let j = 0; j < 3; j++) {
            if (ticTacArr[0 + j * 3] === i && ticTacArr[1 + j * 3] === i
                && ticTacArr[2 + j * 3] === i
            )
                return true;
        }
        for (let j = 0; j < 3; j++) {
            if (ticTacArr[0 + j] === i && ticTacArr[3 + j] === i
                && ticTacArr[6 + j] === i
            )
                return true;
        }
        if (ticTacArr[0] === i && ticTacArr[4] === i
            && ticTacArr[8] === i)
            return true;
        if (ticTacArr[2] === i && ticTacArr[4] === i
            && ticTacArr[6] === i)
            return true;

        return false;
    }

    const handleReset = () => {
        setHistory(Array(9).fill(null))
        setTicTacArr(Array(9).fill(null))
        setCount(0);
        setTurn(0);
        setPlayerTurn(true);
    }
    const isFull = () => {
        for (const item of ticTacArr) {
            if (item === null) return false;
        }
        return true;
    }
    return (
        <div>
            <div className='Players'>
                <Users user='Player O' playerTurn={playerTurn} />
                <Users user='Player X' playerTurn={!playerTurn} />
            </div>
            <div className='BoardWrapper'>

                <div className='Board'>

                    <div className='Row'>
                        <SquareComponent value={ticTacArr[0]} onClick={() => boxClick(0)} > </SquareComponent>
                        <SquareComponent value={ticTacArr[1]} onClick={() => boxClick(1)} > </SquareComponent>
                        <SquareComponent value={ticTacArr[2]} onClick={() => boxClick(2)} > </SquareComponent>
                    </div>
                    <div className='Row'>
                        <SquareComponent value={ticTacArr[3]} onClick={() => boxClick(3)} > </SquareComponent>
                        <SquareComponent value={ticTacArr[4]} onClick={() => boxClick(4)} > </SquareComponent>
                        <SquareComponent value={ticTacArr[5]} onClick={() => boxClick(5)} > </SquareComponent>
                    </div>
                    <div className='Row'>
                        <SquareComponent value={ticTacArr[6]} onClick={() => boxClick(6)} > </SquareComponent>
                        <SquareComponent value={ticTacArr[7]} onClick={() => boxClick(7)} > </SquareComponent>
                        <SquareComponent value={ticTacArr[8]} onClick={() => boxClick(8)} > </SquareComponent>
                    </div>

                </div>
                <ol>
                    {history.map((item, index) => (
                        item === null ? null : <li key={index}>{item}</li>
                    ))}
                </ol>
            </div>
            <div className='BottomMessage'>
                {!checkWinnerHelper() ?
                    (isFull() ? (<div className='Overlay'>
                        <p>Board is Full</p> 
                        <ResetButton onClick = {()=>handleReset()} />
                    </div>)
                        : <p>Player {(turn + 1) % 2 === 1 ? 'o' : 'x'} Turn</p>)
                    : (<div className='Overlay'>
                        <WinnerMessage winnerChar={(turn + 1) % 2 === 1 ? 'x' : 'o'} /> 
                        <ResetButton onClick = {() => handleReset()} />
                    </div>)
                }

            </div>


        </div>
    )
}

export default Board