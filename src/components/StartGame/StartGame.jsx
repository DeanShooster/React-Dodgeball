import './start-game.scss';

const StartGame = ( {start} ) => {
    return (
        <button className='start-game' onClick={()=>start(true)}>Start Game</button>
    );
};

export default StartGame;