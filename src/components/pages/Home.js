import React from 'react';

import Navbar from '../Navbar/Navbar';
import Main from '../Main/Main';
import Cards from '../Cards/Cards';
import About from '../About/About';

export default function Home() {
    return(
        <>
            <Navbar />
            <Main />
            <Cards />
            <About />
        </>
    );
}