import React, { useEffect } from 'react';


function Timer({ setTogglePL, setAnsMsg, count, setCount }) {

    useEffect(() => {
        if( count > 0 ) {
            setTimeout(() => setCount(count-1), 1000)
        } else {
            setAnsMsg('start');
            setTogglePL(false);
        }
    }, [count])

    return (
        <div className='text-center'>
            <p className='fs-5'><em>Time remaining:</em></p>
            { count <= 5 ? 
            <p className='fs-4 fw-bold text-danger'><b>{count} s</b></p> 
            :
            <p className='fs-4 fw-bold'><b>{count} s</b></p> }
        </div>
    )
}

export default Timer;