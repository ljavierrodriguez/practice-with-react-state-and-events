import React from 'react';
import './Digit.css';

export default function Digit(props){
    return (
        <div className="card flex justify-content-center align-items-center">
            {props.num}
        </div>
    )
}