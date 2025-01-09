
import { useState } from "react";
import Button from "../../../shared/buttons/button/Button";
import Input from "../../../shared/inputs/input/Input";
import {
    ContainerLogin,
    LimitDiv,
    LogoImage,
    Titulo,
    CircleLim,
    Circle1,
    Circle2,
    Circle3
} from "../styles/loginScreen.style";

const LoginScreen = () => {

    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');

    const handleUsuarioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsuario(event.target.value)
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    };

    const handleLoginClick = () => {
        alert(`Usuario: ${usuario}, Password: ${password}`)
    }

    return (
            <ContainerLogin>
                <LimitDiv>
                    <LogoImage src="./icone.png"/>
                    <Titulo>Login</Titulo>
                    <Input
                        title="Digite o nome de usuário"
                        titulo="Usuário"
                        onChange={handleUsuarioChange}
                        value={usuario}
                        />
                    <Input
                        title="Digite a senha"
                        titulo="Senha"
                        onChange={handlePasswordChange}
                        value={password}
                        type="password"
                        />
                    <Button
                        type="primary"
                        onClick={handleLoginClick}
                        >ENTRAR</Button>
                    <CircleLim>
                        <Circle1/>
                        <Circle2/>
                        <Circle3/>
                    </CircleLim>
                </LimitDiv>
            </ContainerLogin>
    )
}

export default LoginScreen;