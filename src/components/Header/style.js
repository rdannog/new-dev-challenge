import styled, {createGlobalStyle} from "styled-components";
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
}
`
export const Navigation = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 10vh;
    background-color: rgba(0,0,0, 0.7);
    border-bottom: 1px solid white;
    `
export const Container = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 70%;
    height: 15vh;
`
export const StyledLink = styled(Link)`
    font-size: 1.3rem;
    &:hover{
        cursor: pointer;
        color:#FFE919;
    }
`