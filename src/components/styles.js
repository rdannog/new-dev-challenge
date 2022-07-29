import styled from "styled-components";
import { Link } from "gatsby";

export const Container= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2vh;
`
export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding:6vh 2vw;
    margin: 16px;
    width: 45%;
    height: 50vh;
    border: 1px solid white;
    border-radius: 25px;
`
export const Button= styled.button`
    padding: 15px 50px;
    background-color: transparent;
    border: solid 3px white;
    border-radius: 5%;
    font-size: 1em;
`

export const HomeButton= styled(Link)`
    padding: 15px 50px;
    background-color: transparent;
    border: transparent;
    border-radius: 5%;
    font-size: 1em;
    align-self: start;
`