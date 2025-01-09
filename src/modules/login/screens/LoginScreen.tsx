
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
    return (
            <ContainerLogin>
                <LimitDiv>
                    <LogoImage src="./icone.png"/>
                    <Titulo>Login</Titulo>
                    <Input title="Digite o nome de usuário" titulo="Usuário"/>
                    <Input title="Digite a senha" titulo="Senha"/>
                    <Button type="primary" >ENTRAR</Button>
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