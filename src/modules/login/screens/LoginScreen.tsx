import { useState } from 'react';
import Button from '../../../shared/components/buttons/button/Button';
import SVGlogo from '../../../shared/components/icones/SVGlogo';
import Input from '../../../shared/components/inputs/input/Input';
import { useRequests } from '../../../shared/hooks/useRequests';
import { userGlobalContext } from '../../../shared/hooks/UserGlobalContext';
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
    const {accessToken, setAccessToken} = userGlobalContext();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { postRequest, loading } = useRequests();

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

    const handleLoginClick = () => {
        setAccessToken('Novo Token');
        postRequest('http://localhost:8080/auth', {
            email: email,
            password: password,
        });
    };

    return (
        <ContainerLogin>
            <Container>
                <ContainerBox>
                    <p>Olá</p>
                </ContainerBox>
                <LimitDiv>
                    <SVGlogo width={130} height={130} />
                    <Titulo>Login {accessToken}</Titulo>
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
                    <Button
                        loading={loading}
                        type="primary"
                        onClick={handleLoginClick}
                    >
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
