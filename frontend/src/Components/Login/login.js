import "./login.css";
import iconLogin from "../../static/icon-login.png";
import { InputText } from 'primereact/inputtext';

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

                        <p>Email</p>
                        <InputText className="inputs"></InputText>
                        <p>Senha</p>
                        <InputText className="inputs"></InputText>

                </div>
            </div>

            <div className='footer-espacamento'></div>
        </>
    )
}