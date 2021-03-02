import React from 'react';

import Button from '../Button/Button'
import './Login.css'

const Login = () => {
    return(
        <div className="login-container">
            <div className="components-login">
                    <div className="logo-login">
                        <h1>TYKÊ</h1>
                    </div>
            
            
                <div className="input-login">
                    <input type="text" placeholder="Seu e-mail" className="input1"></input>
                    <input type="text" placeholder="Sua senha" className="input2"></input>
                </div>

                <div className="button-login">
                    <Button
                        className="btns"
                        buttonStyle="btn--primary"
                        buttonSize="btn--circle"
                    >
                        Login
                    </Button>
                    
                    <Button
                        className="btns"
                        buttonStyle="btn--primary"
                        buttonSize="btn--circle"
                    >
                        Register
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Login;