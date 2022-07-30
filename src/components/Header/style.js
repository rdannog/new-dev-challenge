import styled, {createGlobalStyle} from "styled-components";
import Font from "../../fonts/SfDistantGalaxy.ttf"
import {Link} from "gatsby"


export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    color: white;
}
body{
    background-image: url('https://wallpaperaccess.com/full/2151901.jpg');
    background-size: cover;
    background-color: black;
    background-blend-mode: hard-light;
    input[type="checkbox"]{
    display: none;
    }
    input[type="checkbox"]:checked ~ nav{
    transform: translateY(990px);
    }
}
`
export const Navigation = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 10vh;
    background-color: rgba(0,0,0, 0.7);
    border-bottom: 1px solid rgba(255,255,255, 0.3);
    `
export const Container = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 70%;
    height: 15vh;
    @media (max-width: 900px) {
        display: none;
        
    }
`
export const StyledLink = styled(Link)`
    font-size: 1.3rem;
    font-family: 'Encode Sans', sans-serif;
    &:hover{
        cursor: pointer;
        color:#FFE919;
    }
    @media (max-width:900px){
        font-size: 2rem;
        font-family: "Distant Galaxy";
        @font-face {
        font-family: "Distant Galaxy";
        src: url(${Font}) format("truetype")
    }
    }
`

export const Menu = styled.div`
display: none;
width: 100%;
align-items: center;
justify-content: center;
background-color: black;
@media (max-width: 900px){
    display: flex;
}
`
export const Nav = styled.nav`
width:400px;
position:absolute;
top:-900px;
transition: all 0.5s;
padding: 20px;
background-color: black;
z-index: 999;
`
export const Label = styled.label`
    padding:0.1vw;
    position: absolute;
    z-index: 1;
`
export const ContainerMobile = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 70vh;
`