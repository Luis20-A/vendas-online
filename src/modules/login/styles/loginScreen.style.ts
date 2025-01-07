import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;

export const Titulo = styled.h2`
    font-size: 30px;
    font-family: Verdana;
    color: white;
    
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
    padding-top: 30px;
    margin-bottom: 20px;
`;

export const ContainerLogin = styled.div `
    background-color: rgba(78, 1, 78, 0.1);
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
    text-align: center;
    padding: 20px;
    display: block;
    background-color: #75adb44f;
    box-shadow: 3px 3px 2px 2px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
`