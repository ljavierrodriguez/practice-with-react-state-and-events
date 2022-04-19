import React, { useState, useEffect } from 'react';
import Digit from './components/Digit';

const Counter = () => {
    const [num1, setNum1] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        // componentDidMount
        // alert(1);
        setIntervalId(setInterval(() => {
            setNum1(num1 => (num1 + 1))
        }, 100))

        return () => {
            // componentWillUnmount
            // alert(2);
            clearInterval(intervalId);
        }

    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-10 offset-md-1 d-flex justify-content-around">
                    <Digit num={Math.floor((num1 / 100000) % 10)} />
                    <Digit num={Math.floor((num1 / 10000) % 10)} />
                    <Digit num={Math.floor((num1 / 1000) % 10)} />
                    <Digit num={Math.floor((num1 / 100) % 10)} />
                    <Digit num={Math.floor((num1 / 10) % 10)} />
                    <Digit num={num1 % 10} />
                </div>
            </div>
        </div>
    )
}

export default Counter;