import { useEffect, useRef, useState } from 'react';

import './game-container.scss';

import Ball from '../Ball/Ball';
import Timer from '../Timer/Timer';

const GameContainer = ( {cursorRef , setEndGame ,timer ,setTimer} ) => {
    const fieldRef = useRef();
    const [position, setPosition] = useState({ x: 50, y: 50 });
    const [velocity, setVelocity] = useState({ x: 7, y: 4 });
    const [fieldBounds,setFieldBounds] = useState(null);

    // Gets the boundaries size.
    useEffect(()=>{
        if(fieldRef?.current){
            const tempFieldBounds = fieldRef?.current?.getBoundingClientRect();
            setFieldBounds({top: 0, left: 0, 
                bottom: Math.round(tempFieldBounds?.bottom) - 103, 
                right: Math.round(tempFieldBounds?.right) - 103}
            );
        }
    },[fieldRef]);

    // Takes care of adjusting the ball position.
    useEffect(()=>{
        const debounce = requestAnimationFrame(() => {
            setPosition({x: position.x + velocity.x , y: position.y + velocity.y});
        });
        return () => cancelAnimationFrame(debounce);
    },[position,velocity]);

    useEffect(()=>{
        if(mouseGotCaughtByBallHandler(position , cursorRef.current.getBoundingClientRect())) 
            setEndGame(true);
        const randomIncrease = Math.floor(Math.random()*5) + 1;
        if(position.y > fieldBounds?.right ) {
            setPosition({x: position.x , y: fieldBounds?.right - 1});
            setVelocity({x: velocity.x , y: -1*(velocity.y + randomIncrease )});
        }
        if(position.y < fieldBounds?.left ) {
            setPosition({x: position.x , y: 1});
            setVelocity({x: velocity.x , y: -1*(velocity.y + randomIncrease )});
        }
        if(position.x > fieldBounds?.bottom ) {
            setPosition({x: fieldBounds?.bottom - 1 , y: position.y});
            setVelocity({x: -1*(velocity.x + randomIncrease) , y: velocity.y});
        }
        if(position.x < fieldBounds?.top ) {
            setPosition({x: 1 , y: position.y});
            setVelocity({x: -1*(velocity.x + randomIncrease) , y: velocity.y});
        }
    },[position,fieldBounds,cursorRef,setEndGame,velocity.x ,velocity.y,position.x,position.y]);


    function mouseGotCaughtByBallHandler(ballPosition,mousePosition){
        if(ballPosition.x < mousePosition.x && ballPosition.x + 50 > mousePosition.x 
            && ballPosition.y < mousePosition.y && ballPosition.y + 50 > mousePosition.y )
                return true;   
    }

    return (
        <section ref={fieldRef} className='game-field'>
            <Ball x={position.x} y={position.y}/>
            <Timer timer={timer} setTimer={setTimer}/>
        </section>
    );
};

export default GameContainer;