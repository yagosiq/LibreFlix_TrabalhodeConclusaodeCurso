import { Link } from "react-router-dom";

import { useState } from "react";
import { LayoutComponets } from "../../componets/LayoutComponets"

import imgLogo from "../../componets/imgs/imgLogo.png";

export const Register = () => {

    const [email_user, setEmail_user] = useState("");
    const [pw_user, setPw_user] = useState("");
    const [first_name, setFirst_name] = useState("");
    const [last_name, setLast_name] = useState("");
    const [birth_date, setBirth_date] = useState("");
    const [login_user, setLogin_user] = useState("");
    
    return (
        <LayoutComponets>
            <form className="login-form">

                <span className="login-form-title"> Criar Conta</span>

                <span className="login-form-title">
                    <img src={imgLogo} alt="Jovem Programador" />
                </span>

                <div className="wrap-input">
                    <input
                        className={first_name !== "" ? "has-val input" : "input"}
                        type="text"
                        value={first_name}
                        onChange={(e) => setFirst_name(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Nome"></span>
                </div>

                <div className="wrap-input">
                    <input
                        className={last_name !== "" ? "has-val input" : "input"}
                        type="text"
                        value={last_name}
                        onChange={(e) => setLast_name(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Sobrenome"></span>
                </div>

                <div className="wrap-input">
                    <input
                        className={birth_date!== "" ? "has-val input" : "input"}
                        type="text"
                        value={birth_date}
                        onChange={(e) => setBirth_date(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Data de nascimento"></span>
                </div>

                <div className="wrap-input">
                    <input
                        className={login_user !== "" ? "has-val input" : "input"}
                        type="text"
                        value={login_user}
                        onChange={(e) => setLogin_user(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Nome de Usuário"></span>
                </div>

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
                    <button className="login-form-btn">Criar Conta</button>
                </div>

                <div className="text-center">
                    <span className="txt1">Já possui conta? </span>
                    <Link clLinkssName="txt2" to="/login">
                        Acessar com Email e Senha
                    </Link>
                </div>
            </form>

        </LayoutComponets>
    )
}