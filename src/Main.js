import React from 'react';
import { Navbar } from './components/Navbar';
import { About } from './views/About';
import { Contact } from './views/Contact';
import { Home } from './views/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NotFound } from './views/NotFound';

const Main = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/contact/:contact" element={<Contact />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Main;