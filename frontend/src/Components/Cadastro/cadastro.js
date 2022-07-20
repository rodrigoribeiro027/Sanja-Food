import "./cadastro.css";
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

export default function Cadastro(){
    return(
        <>
            <div className="container-cadastro">
                <div>
                    <div className="title-cadastro">
                        <a><strong>Empreendedor crie seu perfil</strong></a>
                    </div>

                    <p className="textp"><strong> realize a divulgação de seus estabelecimentos de forma facil e rapida.</strong></p>                    
                </div>

                <div className="cadastro-form">
                    <div className="form-container-cadastro">
                        <p><strong>Nome do proprietario</strong></p>
                        <InputText className="input-text2"/>
                        <p><strong>Email comercial</strong></p>
                        <InputText className="input-text2"/>
                        <p><strong>Telefone</strong></p>
                        <InputText className="input-text2"/>
                        <p><strong>Senha</strong></p>
                        <Password id="password" toggleMask className="input-text2" feedback={false}></Password>
                        <p><strong>Confirme sua Senha</strong></p>
                        <Password id="password" toggleMask className="input-text2" feedback={false}></Password>
                    </div>
                        <div className="teste">
                            <Button label="Cadastrar" />
                        </div>
                        <div ></div>
                    </div>

            </div>

            <div className='footer-espacamento'></div>
        </>
    )
}