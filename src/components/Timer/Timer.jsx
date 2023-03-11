import { useEffect } from 'react';

import './timer.scss';

const Timer = ( {timer,setTimer}) => {

    useEffect(()=>{
        const timeInterval = setInterval(() => {
            setTimer(timer + 1);
        }, 1000);
        return () => clearInterval(timeInterval);
    },[timer,setTimer])

    return (
        <div className='timer'>
            {timer}
        </div>
    );
};

export default Timer;