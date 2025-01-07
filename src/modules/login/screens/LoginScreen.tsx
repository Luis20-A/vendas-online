
import Input from "../../../shared/inputs/input/Input";
import { BackgroundImage, ContainerLogin, LimitDiv, LogoImage, Container } from "../styles/loginScreen.style";

const LoginScreen = () => {
    return (
        <Container>
            <BackgroundImage src="./comercio.jpg" />
            <ContainerLogin>
                <LimitDiv>
                    <LogoImage src="./icone.png"/>
                    <Input titulo="Usuario"/>
                    <Input titulo="Senha"/>
                </LimitDiv>
            </ContainerLogin>
        </Container>
    )
}

export default LoginScreen;