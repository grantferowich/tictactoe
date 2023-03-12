import React, { useEffect } from 'react'
import './board.css'
import { useState } from 'react';

export default function Board() {
    let [storage, setStorage] = useState([['', '', ''],
    ['', '', ''],
    ['', '', '']] );
    let [currentPlayer, setCurrentPlayer] = useState('X')
    let [numberOfRounds, setNumberOfRounds] = useState(9)
    const [xHasWon, setXHasWon] = useState(false)
    const [oHasWon, setOHasWon] = useState(false)
    let [resultInTie, setResultInTie] = useState(false)

    const switchPlayer = () => {
        setCurrentPlayer(currentPlayer => currentPlayer === 'X' ? 'O' : 'X');
    }

    // read the state
    const canPlacePiece = (row, col) =>{
        if (isNaN(row) || isNaN(col) || row > 2 || row < 0
            || col > 2 || col < 0
            || storage[row][col] === 'X'
            || storage[row][col] === 'O'){
                return false;
        }
        return true;
    }
    
    // update the state
    const placePiece = (row, col) => {
        setStorage(prevState => {
            let newState = [...prevState]
            newState[row][col] = currentPlayer;
            return newState
        })
        return true;
    }

    // read the state, helper method
    const checkRows = () => {
        for (let row = 0; row < storage.length; row++){
            if (storage[row][0] === currentPlayer && storage[row][1] === currentPlayer && storage[row][2] === currentPlayer){
                return true
            }
        }
        return false;
    }
        
    // read the state, helper method
    const checkColumns = () => {
           for (let col = 0; col < storage[0].length; col++){
                if (storage[0][col] === currentPlayer && storage[1][col] === currentPlayer && storage[2][col] === currentPlayer){
                    return true
                }
           }
        return false;
    }
    
    // read the state, helper method
    const checkDiagonals = () => {
            
            // top left to bottom right
            if ((storage[0][0] === currentPlayer) && (storage[1][1] === currentPlayer) && (storage[2][2] === currentPlayer)){
                console.log('something fishy')
                return true;
            }

            // bottom left to top right
            if (storage[0][2] === currentPlayer && storage[1][1] === currentPlayer && storage[2][0] === currentPlayer){

                return true;
            }
            return false;
    }

    // read the state
    const checkWinCondition = () => {
        if (checkColumns() || checkDiagonals() || checkRows()){
            if (currentPlayer === 'X'){
                setXHasWon(true)
            }
            if (currentPlayer === 'O'){
                setOHasWon(true)
            }
            return true
        }
        switchPlayer()
        return false
    };

    // update the state
    const decrementRounds = () => {
        setNumberOfRounds(prevState => prevState - 1)
    }

    const displayWinStatus = () => {
        let winResult = checkWinCondition()
        if (numberOfRounds === 0 && !winResult){
            setResultInTie(true)
        }
        if (winResult && currentPlayer === 'X'){
            setXHasWon(true)
        }
        if (winResult && currentPlayer === 'O'){
            setOHasWon(true)
        }
    }
    

    async function handleClick(row, col){
            if (canPlacePiece(row, col)){
                let result = await placePiece(row, col)
                console.log('result', result)
                /// let's apply single responsibility
                decrementRounds()
                displayWinStatus()
            } 

    }

  return (
    <div>
        {xHasWon && <div>X has won!</div>}
        {oHasWon && <div>O has won!</div>}
        {resultInTie && <div>Cat's game!</div>}
        <table>
            <tbody>
            <tr>
                <td id="cell-0-0" onClick={() => handleClick(0,0)}>{storage[0][0]}</td>
                <td id="cell-0-1" onClick={() => handleClick(0,1)}>{storage[0][1]}</td>
                <td id="cell-0-2" onClick={() => handleClick(0,2)}>{storage[0][2]}</td>
            </tr>
            <tr>
                <td id="cell-1-0" onClick={() => handleClick(1,0)}>{storage[1][0]}</td>
                <td id="cell-1-1" onClick={() => handleClick(1,1)}>{storage[1][1]}</td>
                <td id="cell-1-2" onClick={() => handleClick(1,2)}>{storage[1][2]}</td>
            </tr>
            <tr>
                <td id="cell-2-0" onClick={() => handleClick(2,0)}>{storage[2][0]}</td>
                <td id="cell-2-1" onClick={() => handleClick(2,1)}>{storage[2][1]}</td>
                <td id="cell-2-2" onClick={() => handleClick(2,2)}>{storage[2][2]}</td>
            </tr>
            </tbody>
        </table>
        <h3>It is currently {currentPlayer}'s turn.</h3>
    </div>
  )
}
