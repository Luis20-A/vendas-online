
import styled, { keyframes } from "styled-components";

export const Titulo = styled.h2`
    font-size: 30px;
    font-family: Verdana;
    color: #01e4e4;
    margin-bottom: 5px;
    
`;

export const BackgroundImage = styled.img`

    position: absolute;
    height: 100vh;
    object-fit: cover;
    z-index: 1;

`;

export const ContainerLogin = styled.div `
    background-color: rgba(78, 1, 78, 0);
    width: 100%;
    height: 100vh;
    z-index: 2;
    align-items: center;
    justify-content: center;
    display: flex;

    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url("/fundo/comercio.jpg");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center;
        opacity: 0.5;
        z-index: 1;
    }

`;

export const LimitDiv = styled.div`
    width: 100%;
    height: 500px;
    max-width: 450px;
    justify-content: center;
    text-align: center;
    left: 0;
    top: 0;
    padding: 20px;
    background-color: #096840;
    background-image: url("/compra2.png");
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: bottom ;
    box-shadow: 3px 3px 2px 2px rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    z-index: 3;
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
const pulse = keyframes`

    0% {
        transition: scale(1);
    }
    50% {
        transform: scale(1.2);
    }

    100% {
        transform: scale(1);
    }


`


export const Circle1 = styled.div`
    background-color: #e49c01;
    border-radius: 100px;
    width: 20px;
    height: 20px;
    animation: ${pulse} 1.5s infinite;

    &:hover {
        background-color: blue;
        transition: transform 0.3s, background-color 0.3s;
    }
`
export const Circle2 = styled.div`
    background-color: #67e401;
    border-radius: 100px;
    width: 20px;
    height: 20px;
    animation: ${pulse} 1.8s infinite;

    &:hover {
        background-color: yellow;
        transition: transform 0.3s, background-color 0.3s;
    }
`
export const Circle3 = styled.div`
    background-color: #01e4e4;
    border-radius: 100px;
    width: 20px;
    height: 20px;
    animation: ${pulse} 2s infinite;

    &:hover {
        background-color: red;
        transition: transform 0.3s, background-color 0.3s;
    }
`