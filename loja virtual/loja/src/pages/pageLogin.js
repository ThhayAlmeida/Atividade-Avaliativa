import React from 'react';
import Login from '../componentes/compLogin';
import Input1 from '../componentes/compLogin2';
import Input2 from '../componentes/compLogin3';
import Button from '../componentes/compLogin4';
import './pageLogin.css';
import{Link} from 'react-router-dom';

function PLogin() {
    return (
        <div className="ContainerMain">
            <div className="Container">
                <div className="login">
                    <Login name="Login" />
                </div>
                <div className="usuario">
                    <h2>Username</h2>
                    <Input1 name="Username" />
                    <h2>Password</h2>
                    <Input2 name="Password" />
                </div>
                <div className="Botao">
                    <Button name="Login" />
                </div>
            </div>
        </div>
    );
}
export default PLogin;