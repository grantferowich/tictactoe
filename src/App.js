import Board from './components/Board'
import './app.css'

function App() {
  let state = {
    currentPlayer: 'X',
    numberOfRounds: 9
  }



  return (
    <div>
      <h1 className='h1'>Tic-Tac-Toe</h1>
      <Board state={state}/>
    </div>
  );
}

export default App;
