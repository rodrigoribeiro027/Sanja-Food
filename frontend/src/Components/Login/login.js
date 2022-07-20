import "./login.css";
import iconLogin from "../../static/icon-login.png";
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';


export default function Login(){
    return(
        <>
            <div className="container-login">
                <div>
                    <div className="title-login">
                        <a>Login de Usuarios</a>
                    </div>

                        <img className="icon-login" src={iconLogin}></img>
                    
                </div>

                <div className="login-form">
                    <div className="form-container">
                        <p><strong>Email</strong></p>
                        <InputText className="input-text"/>
                        <p><strong>Senha</strong></p>
                        <Password id="password" toggleMask className="input-text" feedback={false}></Password>
                        <p>
                            <a className="others-options" href=""><span>Esqueci minha senha</span></a>
                            <span  className="others-options"> | </span>
                            <a className="others-options" href=""><span>Cadastre-se</span></a>
                        </p>
                    </div>
                    <Button label="Entrar" />
                </div>

            </div>

            <div className='footer-espacamento'></div>
        </>
    )
}