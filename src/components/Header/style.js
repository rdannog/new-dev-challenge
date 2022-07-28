import styled, {createGlobalStyle} from "styled-components";
import {Link} from "gatsby"


export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    cursor: default;
    color: white;
}
body{
    background-color: black;
}
`
export const Navigation = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 15vh;
    background-color: black;
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
    font-size: 1.5em;
    font-family: Arial, Helvetica, sans-serif;
    &:hover{
        cursor: pointer;
        color:darkgoldenrod;
    }
`