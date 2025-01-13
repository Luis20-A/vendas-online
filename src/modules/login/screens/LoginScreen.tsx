import axios from 'axios';
import { useState } from 'react';
import Button from '../../../shared/buttons/button/Button';
import SVGlogo from '../../../shared/icones/SVGlogo';
import Input from '../../../shared/inputs/input/Input';
import {
    Circle1,
    Circle2,
    Circle3,
    CircleLim,
    Container,
    ContainerBox,
    ContainerLogin,
    LimitDiv,
    Titulo,
} from '../styles/loginScreen.style';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setPassword(event.target.value);
    };

    const handleLoginClick = async () => {
        await axios({
            method: 'post',
            url: 'http://localhost:8080/auth',
            data: {
                email: email,
                password: password,
            },
        })
            .then((result) => {
                alert(`Fez login ${result.data.accessToken}`);
                return result.data;
            })
            .catch(() => {
                alert('Dados invalidos');
            });
    };

    return (
        <ContainerLogin>
            <Container>
                <ContainerBox>
                    <p>Olá</p>
                </ContainerBox>
                <LimitDiv>
                    <SVGlogo width={130} height={130}/>
                    <Titulo>Login</Titulo>
                    <Input
                        title="Digite o nome de usuário"
                        titulo="Usuário"
                        onChange={handleEmailChange}
                        value={email}
                    />
                    <Input
                        title="Digite a senha"
                        titulo="Senha"
                        onChange={handlePasswordChange}
                        value={password}
                        type="password"
                    />
                    <Button type="primary" onClick={handleLoginClick}>
                        ENTRAR
                    </Button>
                    <CircleLim>
                        <Circle1 />
                        <Circle2 />
                        <Circle3 />
                    </CircleLim>
                </LimitDiv>
            </Container>
        </ContainerLogin>
    );
};

export default LoginScreen;
