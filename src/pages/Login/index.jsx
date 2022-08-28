import { Link } from 'react-router-dom';
import {axios} from 'axios';
import { useState } from "react";

import imgLogo from "../../componets/imgs/imgLogo.png";
import { LayoutComponets } from '../../componets/LayoutComponets';


export const Login = () => {
    const [email_user, setEmail_user] = useState("");
    const [pw_user, setPw_user] = useState("");

    const handleSubmit = event => {
        console.log(email_user, pw_user)
        event.preventDefault()
         fetch('https://recomenda-filmes.herokuapp.com/login', {
            method: 'POST', 
            body: {email_user: email_user,
                    pw_user: pw_user}
         }).then(response => {console.log(response)})
        .catch(function (error) {
        console.log(error);
    });
    
        console.log('form submitted ✅');
      };

return (

    <LayoutComponets>
        <form className="login-form" onSubmit={handleSubmit}>

            <span className="login-form-title"> Bem-vindo ao</span>

            <span className="login-form-title">
                <img src={imgLogo} alt="Jovem Programador" />
            </span>

            <div className="wrap-input">
                <input
                    className={email_user !== "" ? "has-val input" : "input"}
                    type="email"
                    value={email_user}
                    onChange={(e) => setEmail_user(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
                <input
                    className={pw_user !== "" ? "has-val input" : "input"}
                    type="password"
                    value={pw_user}
                    onChange={(e) => setPw_user(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Senha"></span>
            </div>

            <div className="container-login-form-btn">
                <button type="submit" className="login-form-btn">Login</button>
            </div>

            <div className="text-center">
                <span className="txt1">Não possui conta? </span>
                <Link clLinkssName="txt2" to="/register">
                    Criar conta
                </Link>
            </div>
        </form>
    </LayoutComponets>
)
}