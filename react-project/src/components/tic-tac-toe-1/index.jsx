import { useEffect, useState } from 'react'
import './style.css'

function Square({ value, onClick }) {
    return <>
        <button onClick={onClick} className="square">{value}</button>
    </>
}


export default function TicTacToe() {

    const [squares, SetSquares] = useState(Array(9).fill(''))
    const [isXTurn, setIsXTurn] = useState(true)
    const [status, setStatus] = useState('')
    console.log(squares)

    const getWinner = (squares) => {
        const winningPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for (let i = 0; i < winningPatterns.length; i++) {
            const [x, y, z] = winningPatterns[i]
            if (squares[x] === squares[y] && squares[x] === squares[z]) {
                return squares[x]
            }
        }
        return null
    }

    const handleClick = (getSquareId) => {
        let cpySquares = [...squares]
        if (getWinner(squares) || squares[getSquareId] !== '') return
        cpySquares[getSquareId] = isXTurn ? 'X' : 'O'
        setIsXTurn(!isXTurn)
        SetSquares(cpySquares)
    }

    const handleRestart = () => {
        setIsXTurn(true)
        SetSquares(Array(9).fill(''))
    }

    useEffect(() => {
        if (!getWinner(squares) && squares.every(item => item !== '')) {
            setStatus('Game is a Draw')
        } else if (getWinner(squares)) {
            setStatus(`Winner is Player ${getWinner(squares)}`)
        } else {
            setStatus(`Next player is ${isXTurn ? 'X' : 'O'}`)
        }
    }, [squares, isXTurn])

    return <>
        <div className="tic-tac-toe-container">
            <div className="board">
                {
                    squares.map((value, index) => {
                        return <Square
                            key={index}
                            value={value}
                            onClick={() => handleClick(index)}
                        />
                    })
                }
            </div>
            <h1>{status}</h1>
            <button onClick={() => handleRestart()}>Restart</button>
        </div>
    </>
}