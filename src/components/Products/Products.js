import React from 'react';

import "./Products.css"

const Products = () => {
    return(
        <div className="products-container">
            <div className="products-list">
                <ul className="pote-pequeno">
                    <li className="texto">
                        <a className="produtos" href="https://www.wix.com/">
                            <h1>Pote Pequeno</h1>
                            <img src="/icons/body.svg"  alt="imagem"></img>
                            <p>Potes de qualidade</p>
                        </a>
                    </li>
                    
                    <li className="texto">
                        <a className="produtos" href="https://www.wix.com/">
                            <h1>Pote Pequeno</h1>
                            <img src="/icons/body.svg"  alt="imagem"></img>
                            <p>Potes de qualidade</p>
                        </a>
                    </li>

                    <li className="texto">
                        <a className="produtos" href="https://www.wix.com/">
                            <h1>Pote Pequeno</h1>
                            <img src="/icons/body.svg"  alt="imagem"></img>
                            <p>Potes de qualidade</p>
                        </a>
                    </li>

                </ul>

                <ul className="pote-pequeno">
                    <li className="texto"> 
                        <a className="produtos" href="https://www.wix.com/">
                            <h1>Pote Pequeno</h1>
                            <img src="/icons/body.svg"  alt="imagem"></img>
                            <p>Potes de qualidade</p>
                        </a>
                    </li>

                    <li className="texto">
                        <a className="produtos" href="https://www.wix.com/">
                            <h1>Pote Pequeno</h1>
                            <img src="/icons/body.svg"  alt="imagem"></img>
                            <p>Potes de qualidade</p>
                        </a>
                    </li>
                    <li className="texto">
                        <a className="produtos" href="https://www.wix.com/">
                            <h1>Pote Pequeno</h1>
                            <img src="/icons/body.svg"  alt="imagem"></img>
                            <p>Potes de qualidade</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Products;