import React from 'react'
import './board.css'
import { useState } from 'react';

export default function Board() {
    const [storage, setStorage] = useState( [['', '', ''],
    ['', '', ''],
    ['', '', '']] );
    const [currentPlayer, setCurrentPlayer] = useState('X')
    const [numberOfRounds, setNumberOfRounds] = useState(9)
    const [xHasWon, setXHasWon] = useState(false)
    const [oHasWon, setOHasWon] = useState(false)
    const [resultInTie, setResultInTie] = useState(false)

    // do some stuff with app state
    // const switchPlayer = () => {
    //     if (currentPlayer === 'X'){
    //         setCurrentPlayer('O');
    //     } else {
    //         setCurrentPlayer('X');
    //     }
    // }

    // check some data stuff
    const canPlacePiece = (row, col) =>{
        if (isNaN(row) || isNaN(col) || row > 2 || row < 0
            || col > 2 || col < 0
            || storage[row][col] === 'X'
            || storage[row][col] === 'O'){
                return false;
        }
        return true;
    }
    
    // do some stuff with data
    const placePiece = (row, col, player) => {
        setStorage(storage[row][col]= player) 
    }

    // check some data stuff, helper method
    // const checkRows = (player) => {
    //     for (let row = 0; row < storage.length; row++){
    //         if (storage[row][0] === player && storage[row][1] === player && storage[row][2] === player){
    //             return true
    //         }
    //     }
    //     return false;
    // }
        
    // check some stuff, helper method
    // const checkColumns = (player) => {
    //        for (let col = 0; col < storage[0].length; col++){
    //             if (storage[0][col] === player && storage[1][col] === player && storage[2][col] === player){
    //                 return true
    //             }
    //        }
    //     return false;
    // }
    
    // check some stuff, helper method
    // const checkDiagonals = (player) => {
    //         // top left to bottom right
    //         if (storage[0][0] === player && storage[1][1] === player && storage[2][2] === player){
    //             return true;
    //         }
    //         // bottom left to top right
    //         if (storage[0][2] === player && storage[1][1] === player && storage[2][0] === player){
    //             return true;
    //         }
    //         return false;
    // }

    // const checkWinCondition = (player) => {
    //     if (checkColumns(player) || checkDiagonals(player) || checkRows(player)){
    //         console.log('something wierd')
    //         return true
    //     }
    //     return false
    // };

    // const decrementRounds = () => {
    //     let newNumber = numberOfRounds - 1;
    //     setNumberOfRounds(newNumber)
    // }

    const handleClick = (row, col) => {
            console.log('handleClick firing...')
            if (canPlacePiece(row, col)){
                placePiece(row, col, currentPlayer)
                // let checkForWinnerToF = checkWinCondition(currentPlayer)
                // console.log('// debug checkForWinnerToF:', checkForWinnerToF)
    
                // if (checkForWinnerToF && currentPlayer === 'X'){
                //     setXHasWon(true)
                // }
                // if (checkForWinnerToF && currentPlayer === 'O'){
                //     setOHasWon(true)
                // }
    
                // do stuff with state
                // decrementRounds()
    
                // declare tie, if exists
                // if (numberOfRounds === 0 && !checkForWinnerToF){
                //     setResultInTie(true)
                // }
                // switchPlayer()
            } 
    }

  return (
    <div>
        {/* {xHasWon && <div>X has won!</div>}
        {oHasWon && <div>O has won!</div>}
        {resultInTie && <div>Cat's game!</div>} */}
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
