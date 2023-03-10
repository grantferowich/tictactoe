import React, { Component } from 'react'
import './board.css'
export default class board extends Component {
    
    state = {
        storage: [['', '', ''],
        ['', '', ''],
        ['', '', '']],
        currentPlayer: 'X',
        numberOfRounds: 9,
        xHasWon: false,
        oHasWon: false,
        resultInTie: false
    }
    
    // do some stuff with app state
    switchPlayer(){
        if (this.state.currentPlayer === 'X'){
            this.setState(prevState => {
                let currentPlayerCopy = [...prevState.currentPlayer];
                currentPlayerCopy = 'O'
                return {currentPlayer: currentPlayerCopy}
            })
        } else {
            this.setState(prevState => {
                let currentPlayerCopy = [...prevState.currentPlayer]
                currentPlayerCopy = 'X'
                return {currentPlayer: currentPlayerCopy}
            })
        }
    }

    // check some data stuff
    canPlacePiece(row, col){
        if (isNaN(row) || isNaN(col) || row > 2 || row < 0
            || col > 2 || col < 0
            || this.state.storage[row][col] === "X"
            || this.state.storage[row][col] === "O"){
                return false;
        }
        return true;
    }
    
    // do some stuff with data
    placePiece(row, col, player){
            this.setState((state) => {
                let storage = [...state.storage]
                storage[row][col] = player;
                return {storage}
            }, () => {console.log('Updated storage:', this.state.storage)})        
    }


    // check some data stuff, helper method
    checkRows(player){
        for (let row = 0; row < this.state.storage.length; row++){
            if (this.state.storage[row][0] === player && this.state.storage[row][1] === player && this.state.storage[row][2] === player){
                return true
            }
        }
        return false;
    }
        
    // check some stuff, helper method
    checkColumns(player){
           for (let col = 0; col < this.state.storage[0].length; col++){
                if (this.state.storage[0][col] === player && this.state.storage[1][col] === player && this.state.storage[2][col] === player){
                    return true
                }
           }
        return false;
    }
    
    // check some stuff, helper method
    checkDiagonals(player){
            // top left to bottom right
            if (this.state.storage[0][0] === player && this.state.storage[1][1] === player && this.state.storage[2][2] === player){
                return true;
            }
            // bottom left to top right
            if (this.state.storage[0][2] === player && this.state.storage[1][1] === player && this.state.storage[2][0] === player){
                return true;
            }
            return false;
    }



    componentDidUpdate = (prevState) => {
        console.log('this.state.storage', this.state.storage)
        console.log(prevState)
        if (prevState.storage !== this.state.storage){
            const checkWinCondition = (state, player) => {
                // console.log('/// debug the state (again)',this.state.storage[0])
                // console.log('/// debug the storage', this.state.storage[0][0] === '')
                if (this.checkColumns(player) || this.checkDiagonals(player) || this.checkRows(player)){
                    console.log('something wierd')
                    return true
                }
                return false
            };
            this.checkWinCondition = checkWinCondition
        }
        return this.checkWinCondition(this.state, this.state.currentPlayer)
    }



    decrementRounds(){
        this.setState( prevState =>{
            let numberOfRoundsCopy = prevState.numberOfRounds;
            numberOfRoundsCopy--
            return {numberOfRounds: numberOfRoundsCopy}
        }
        )  
    }
    
    handleClick(row, col){
        console.log('handleClick firing...')
        if (this.canPlacePiece(row, col)){
            this.placePiece(row, col, this.state.currentPlayer)
            // give some time for state to update
            console.log('/// debug the state', this.state)
            //
         
            let checkForWinnerToF = this.componentDidUpdate();

            console.log('checkForWinnerToF:', checkForWinnerToF)

            if (checkForWinnerToF && this.state.currentPlayer === 'X'){
                this.setState({xHasWon: true})
                // this.declareWinner(this.state.currentPlayer)
            }
            if (checkForWinnerToF && this.state.currentPlayer === 'O'){
                this.setState({oHasWon: true})
                // this.declareWinner(this.state.currentPlayer)
            }

            // do stuff with state
            this.decrementRounds()

            // declare tie, if exists
            if (this.state.numberOfRounds === 0){
                this.setState({resultInTie: true})
            }
            this.switchPlayer()
        } 
    }


  render() {
    return (
      <div>
        {this.state.xHasWon && <div>X has won!</div>}
        {this.state.oHasWon && <div>O has won!</div>}
        {this.state.resultInTie && <div>Cat's game!</div>}
        <table>
            <tbody>
            <tr>
                <td id="cell-0-0" onClick={() => this.handleClick(0,0)}>{this.state.storage[0][0]}</td>
                <td id="cell-0-1" onClick={() => this.handleClick(0,1)}>{this.state.storage[0][1]}</td>
                <td id="cell-0-2" onClick={() => this.handleClick(0,2)}>{this.state.storage[0][2]}</td>
            </tr>
            <tr>
                <td id="cell-1-0" onClick={() => this.handleClick(1,0)}>{this.state.storage[1][0]}</td>
                <td id="cell-1-1" onClick={() => this.handleClick(1,1)}>{this.state.storage[1][1]}</td>
                <td id="cell-1-2" onClick={() => this.handleClick(1,2)}>{this.state.storage[1][2]}</td>
            </tr>
            <tr>
                <td id="cell-2-0" onClick={() => this.handleClick(2,0)}>{this.state.storage[2][0]}</td>
                <td id="cell-2-1" onClick={() => this.handleClick(2,1)}>{this.state.storage[2][1]}</td>
                <td id="cell-2-2" onClick={() => this.handleClick(2,2)}>{this.state.storage[2][2]}</td>
            </tr>
            </tbody>
        </table>
        <h3>It is currently {this.state.currentPlayer}'s turn.</h3>
      </div>
    )
  }
}
