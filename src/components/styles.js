import styled, {createGlobalStyle} from "styled-components";
import Font from "../fonts/SfDistantGalaxy.ttf"


export const HomeContainer = styled.div`
    @font-face {
      font-family: "Distant Galaxy";
      src: url(${Font}) format("truetype")
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 70vh;
    
    img{
      height: 30vh;
      margin-bottom: 3vh;
    }
    h2{
      font-size: 2.5rem;
      font-family: "Distant Galaxy";
    }
`


export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "Distant Galaxy";
        src: url(${Font}) format("truetype")
    }
    
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    color: white;
    transition:all ease-in-out 1s;
}
`
export const Container= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 8vh;
`
export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding:6vh 2vw;
    margin: 16px;
    width: 50vw;
    height: 50vh;
    text-align: center;
    animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    @keyframes scale-up-center {
    0% {
        -webkit-transform: scale(0.5);
                transform: scale(0.5);
    }
    100% {
        -webkit-transform: scale(1);
                transform: scale(1);
    }
    }

    p{
        color: #FFE919;
        font-size: 1.6rem;
        font-family: 'Archivo Black', sans-serif;
        text-align: justify;
    }
    h2{
        font-size: 2.5rem;
        font-family: "Distant Galaxy";
    }
    
`
export const Title = styled.h2`
    margin-bottom: 7vh;
`
export const Button= styled.button`
    padding: 15px 50px;
    background-color: transparent;
    border: solid 3px white;
    border-radius: 5%;
    font-size: 1rem;
    font-family: 'Archivo Black', sans-serif;
    color:#FFE919;
    background-color: rgba(0,0,0, 0.8);
    cursor:pointer;
    &:active{
        animation: rotate-center 0.3s ease-in-out both;
        @keyframes rotate-center {
        0% {
            -webkit-transform: rotate(0);
                    transform: rotate(0);
        }
        100% {
            -webkit-transform: rotate(360deg);
                    transform: rotate(360deg);
        }
    }
}
`
