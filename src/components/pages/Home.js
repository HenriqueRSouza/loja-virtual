import React from 'react';

import Navbar from '../Navbar/Navbar';
import Main from '../Main/Main';
import Cards from '../Cards/Cards';
import About from '../About/About';
import Footer from '../Footer/Footer';

export default function Home() {
    return(
        <>
            <Navbar />
            <Main />
            <Cards />
            <About />
            <Footer />
        </>
    );
}