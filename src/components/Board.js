import React, { useEffect } from 'react'
import './board.css'
import { useState } from 'react';

export default function Board() {
    let [storage, setStorage] = useState([['', '', ''],
    ['', '', ''],
    ['', '', '']] );
    let [currentPlayer, setCurrentPlayer] = useState('X')
    let [numberOfRounds, setNumberOfRounds] = useState(9)
    // const [xHasWon, setXHasWon] = useState(false)
    // const [oHasWon, setOHasWon] = useState(false)
    // let [resultInTie, setResultInTie] = useState(false)


    // update the state 
    const switchPlayer = (currentPlayer) => {
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
    const placePiece = (row, col, player, storage) => {
        setStorage(prevState => {
            let newState = [...prevState]
            newState[row][col] = player;
            return newState
        })
    }

    // read the state, helper method
    const checkRows = (player) => {
        for (let row = 0; row < storage.length; row++){
            if (storage[row][0] === player && storage[row][1] === player && storage[row][2] === player){
                return true
            }
        }
        return false;
    }
        
    // read the state, helper method
    const checkColumns = (player) => {
           for (let col = 0; col < storage[0].length; col++){
                if (storage[0][col] === player && storage[1][col] === player && storage[2][col] === player){
                    return true
                }
           }
        return false;
    }
    
    // read the state, helper method
    const checkDiagonals = (player) => {
            // top left to bottom right
            if (storage[0][0] === player && storage[1][1] === player && storage[2][2] === player){
                return true;
            }
            // bottom left to top right
            if (storage[0][2] === player && storage[1][1] === player && storage[2][0] === player){
                return true;
            }
            return false;
    }

    // read the state
    const checkWinCondition = (player) => {
        if (checkColumns(player) || checkDiagonals(player) || checkRows(player)){
            console.log('something wierd')
            return true
        }
        return false
    };

    // update the state
    const decrementRounds = () => {
        setNumberOfRounds(numberOfRounds--)
    }
    
    useEffect(() => {
        console.log('Current player:', currentPlayer);
      }, [currentPlayer]);


    useEffect(() => {
        console.log('Current storage:', storage);
      }, [storage]);

    const handleClick = (row, col) => {
            console.log('click')
            console.log('row', row)
            console.log('col', col)
            if (canPlacePiece(row, col)){
                placePiece(row, col, currentPlayer)
                switchPlayer(currentPlayer)
            } 
    }

  return (
    <div>
        {/* {xHasWon && <div>X has won!</div>}
        {oHasWon && <div>O has won!</div>} */}
        {/* {resultInTie && <div>Cat's game!</div>} */}
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
