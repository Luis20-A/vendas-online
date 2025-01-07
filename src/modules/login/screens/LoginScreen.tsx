import { BackgroundImage, ContainerLogin, LimitDiv, LogoImage, Container } from "../styles/loginScreen.style";

const LoginScreen = () => {
    return (
        <Container>
            <BackgroundImage src="./comercio.jpg" />
            <ContainerLogin>
                <LimitDiv>
                    <LogoImage src="./icone.png"/>
                </LimitDiv>
            </ContainerLogin>
        </Container>
    )
}

export default LoginScreen;