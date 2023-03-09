import React, { Component } from 'react'
import './board.css'
export default class board extends Component {
    
   
    
    state = {
        storage: [[' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']],
        state2: ''
    }
    
    // check some stuff
    canPlacePiece(row, col){
        if (isNaN(row) || isNaN(col) || row > 2 || row < 0
            || col > 2 || col < 0
            || this.state.storage[row][col] === "X"
            || this.state.storage[row][col] === "O"){
                return false;
        }
        return true;
    }
    
    // do some stuff with the data
    placePiece(row, col, player){
            this.setState( prevState =>{
                const storageCopy = [...prevState.storage];
                storageCopy[row][col] = player
                return {storage: storageCopy}
            }
            )       
    }
    
    // check some stuff
    checkWinCondition(player){
        if (this.checkColumns(player) || this.checkDiagonals(player) || this.checkRows(player)){
            return true
        }
        return false
    }
        
    // check some stuff
    checkRows(player){
        for (let row = 0; row < this.storage.length; row++){
            if (this.state.storage[row][0] === player && this.state.storage[row][1] === player && this.state.storage[row][2] === player){
                return true
            }
        }
        return false;
    }
        
    // check some stuff
    checkColumns(player){
           for (let col = 0; col < this.storage[0].length; col++){
                if (this.state.storage[0][col] === player && this.state.storage[1][col] === player && this.state.storage[2][col] === player){
                    return true
                }
           }
           return false;
    }
    
    // check some stuff
    checkDiagonals(player){
            // top left to bottom right
            if (this.state.storage[0][0] === player && this.state.storage[1][1] === player && this.state.storage[2][2] === player){
                return true;
            }
            // bottom left to top right
            if (this.storage[0][2] === player && this.state.storage[1][1] === player && this.state.storage[2][0] === player){
                return true;
            }
            return false;
    }
    Ô

  render() {
    return (
      <div>
        <table>
            <tbody>
            <tr>
                <td id="cell-0-0">{this.state.storage[0][0]}</td>
                <td id="cell-0-1">{this.state.storage[0][1]}</td>
                <td id="cell-0-2">{this.state.storage[0][2]}</td>
            </tr>
            <tr>
                <td id="cell-1-0">{this.state.storage[1][0]}</td>
                <td id="cell-1-1">{this.state.storage[1][1]}</td>
                <td id="cell-1-2">{this.state.storage[1][2]}</td>
            </tr>
            <tr>
                <td id="cell-2-0">{this.state.storage[2][0]}</td>
                <td id="cell-2-1">{this.state.storage[2][1]}</td>
                <td id="cell-2-2">{this.state.storage[2][2]}</td>
            </tr>
            </tbody>
        </table>
      </div>
    )
  }
}
