import { useRef, useState } from 'react';

import './App.scss';
import Cursor from './components/Cursor/Cursor';
import EndGame from './components/EndGame/EndGame';

import GameContainer from './components/GameContainer/GameContainer';
import StartGame from './components/StartGame/StartGame';

function App() {

  const [startGame,setStartGame] = useState(false);
  const [endGame,setEndGame] = useState(false);
  const cursorRef = useRef(null);
  const [timer,setTimer] = useState(0);


  return (
    <div className="App">
      <Cursor cursorRef={cursorRef}/>
      {!endGame && !startGame && <StartGame start={setStartGame}/>}
      {!endGame && startGame && <GameContainer cursorRef={cursorRef} setEndGame={setEndGame} timer={timer} setTimer={setTimer}/> }
      {endGame && <EndGame timer={timer} setStartGame={setStartGame} setEndGame={setEndGame} setTimer={setTimer}/>}
    </div>
  );
}

export default App;
