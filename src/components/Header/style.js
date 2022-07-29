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
    background-color: black;
}
`
export const Navigation = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 10vh;
    background-color: black;
    border-bottom: 1px solid white;
    `
export const Container = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 70%;
    height: 15vh;
    padding-left: 10vw;
`
export const StyledLink = styled(Link)`
    font-size: 1.3rem;
    &:hover{
        cursor: pointer;
        color:#FFE919;
    }
`