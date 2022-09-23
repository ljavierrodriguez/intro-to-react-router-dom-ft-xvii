import React, { useState } from 'react';

export const Home = () => {
    const [name, setName] = useState('Luis');
    return (
        <>
            <h1>Home {name}</h1>
            <button onClick={() => setName('Javier')}>Cambiar Nombre</button>
        </>
    )
}