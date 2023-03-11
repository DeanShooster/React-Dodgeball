import { useEffect, useState } from 'react';

import './cursor.scss';

const Cursor = ( {cursorRef}) => {

    const [cursor,setCursor] = useState( {x: 0, y: 0});
 
    useEffect(()=>{
        const cursorSize = 15;
        const cursorPosition = (event) => setCursor({x: event.clientY - cursorSize, y: event.clientX - cursorSize});
        window.addEventListener('mousemove',cursorPosition);
        return ()=> window.removeEventListener(cursorPosition);
    },[])

    return (
        <div className='cursor' style={{top: cursor.x , left: cursor.y}} ref={cursorRef}>
            <div className='smile'></div>
        </div>
    );
};

export default Cursor;