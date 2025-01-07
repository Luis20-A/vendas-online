import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
`;

export const BackgroundImage = styled.img`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    max-width: 800px;
    object-fit: cover;
    z-index: 1;
`;

export const LogoImage = styled.img`
    width: 150px;
    height: 150px;
    padding-top: 50px;
    
`;

export const ContainerLogin = styled.div `
    background-color: #f0f0f0;
    width: 100%;
    height: 100vh;
    max-width: 568px;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 2;
    align-items: center;
    justify-content: center;
    display: flex;

`;

export const LimitDiv = styled.div`
    width: 100%;
    height: 500px;
    max-width: 450px;
    justify-content: center;
    padding: 20px;
    display: flex;
    background-color: #61dff04f;
    box-shadow: 3px 3px 2px 2px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
`