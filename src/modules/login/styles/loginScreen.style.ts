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
    width: 130px;
    height: 130px;
    margin-top: 5px;
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

export const CircleLim = styled.div`
    margin: 10px 50px;
    justify-content: center;
    display: flex;
    align-items: center;
    width: 350px;
    height: 20px;
    gap: 10px;
`

export const Circle1 = styled.div`
    background-color: #e49c01;
    border-radius: 100px;
    width: 20px;
    height: 20px;
`
export const Circle2 = styled.div`
    background-color: #67e401;
    border-radius: 100px;
    width: 20px;
    height: 20px;
`
export const Circle3 = styled.div`
    background-color: #01e4e4;
    border-radius: 100px;
    width: 20px;
    height: 20px;
`