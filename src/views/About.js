import React from 'react';
import { useNavigate } from 'react-router-dom';

export const About = () => {


    const navigate = useNavigate();

    return (
        <>
            <h1>About</h1>
            <button className="btn btn-warning" onClick={() => {
                navigate('/');
            }}>Home</button>

            <button className="btn btn-info" onClick={() => {
                navigate(-1);
            }}>Regresar</button>
        </>
    )
}