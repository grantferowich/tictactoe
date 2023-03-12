## Tic Tac Toe

Tic Tac Toe is a classic game. Line up three X's or three O's in a row and you win. 

The game is designed to enable two people to face off against each other. 

The deployed version of the application is available here: https://tic-tac-toe-five-lilac.vercel.app/

The system was designed according to functional requirements. 

## Functional requirements

# state changes
1. A user should be able to place a move by clicking on a square.
2. A user should be able to switch with the other user.
# view changes
3. A user should be able to see whose turn it is. 
4. A user should be able to see when a user has won.
5. A user should be able to see when the game ends in a tie.


# Event Flow
When a user clicks on a spot on the tic tac toe table
    -> check if the table state can change
        -if yes, then change. (a user should be able to place a move by clicking on a square)(#1)
        -if no, do nothing.
    -> check if the game has a winner  
        -if yes, declare winner (a user should be able to see when a user has won)(#4)
        -if no, do nothing.
    -> decrement number of rounds (do stuff with state data)
    -> check if there is a tie
        -if yes, declare cat's game (a user should be able to see when the game ends in a tie)(#5)
        -if no, do nothing.
    -> switch the user (#2)
    -> Display whose turn it is.(A user should be able to see whose turn it is)(#3)


