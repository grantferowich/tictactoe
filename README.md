# Tic Tac Toe

Tic Tac Toe is a classic game. Line up three X's or three O's in a row and you win. 

The game is designed to enable two people to face off against each other. 

The deployed version of the application is available here: https://tic-tac-toe-five-lilac.vercel.app/

The system was designed according to functional requirements. 

## Live app preview
![alt text](https://github.com/grantferowich/tictactoe/blob/main/public/Screen%20Shot%202023-03-12%20at%201.46.23%20PM.png)

# Functional requirements

## State changes
1. A user should be able to place a move by clicking on a square.
2. A user should be able to switch with the other user.
## View changes
3. A user should be able to see whose turn it is. 
4. A user should be able to see when a user has won.
5. A user should be able to see when the game ends in a tie.


## Event Flow
- When a user clicks on a spot on the tic tac toe table:
    - Check if the table state can change.
        - If yes, then change (a user should be able to place a move by clicking on a square)(#1).
        - If no, do nothing.
    - Check if the game has a winner.
        - If yes, declare the winner (a user should be able to see when a user has won)(#4).
        - If no, do nothing.
    - Decrement number of rounds (do stuff with state data).
    - Check if there is a tie
        - if yes, declare cat's game (a user should be able to see when the game ends in a tie)(#5).
        - if no, do nothing.
    - Switch the user (#2).
    - Display whose turn it is (A user should be able to see whose turn it is)(#3).


