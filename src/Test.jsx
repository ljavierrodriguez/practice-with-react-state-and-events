import React, { useState } from 'react';
import Counter from './components/Counter';


export const Test = () => {
    const [show, setShow] = useState(true);
    return (
        <>
            <h1 className='text-center'>Simple Component React</h1>
            <button onClick={() => setShow(!show)}>
                { show ? "Ocultar": "Mostrar"}
            </button>
            {
                show ? (
                    <Counter />
                ):(
                    <h1>Counter Eliminado</h1>
                )
            }
            
        </>
    )
}