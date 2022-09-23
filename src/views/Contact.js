import React, { useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

export const Contact = () => {

    const location = useLocation();

    const { contact } = useParams();

    useEffect(() => {
        console.log(location);
    }, [])
    
    useEffect(() => {
        console.log(contact);
    }, [contact])
    
    return (
        <>
            <h1>Contact</h1>
            <Link className="text-muted" to={"/contact/tecnologia"}>{"tecnologia"}</Link>
        </>
    )
}