
import './end-game.scss';

const EndGame = ( {timer ,setStartGame ,setEndGame ,setTimer}) => {

    const restartGameHandler = () =>{
        setEndGame(false);
        setStartGame(true);
        setTimer(0);
    }

    return (
        <div className='game-over'>
            <h1>Game Over</h1>
            <p>You survived for: <span>{timer}</span> seconds.</p>
            <button onClick={restartGameHandler}>Try Again</button>
        </div>
    );
};

export default EndGame;