import styled from "styled-components";
import { Link } from "gatsby";

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
    width: 45%;
    height: 50vh;
    border-radius: 25px;
    text-align: center;
    h2{
        margin-bottom: 3vh;
    }
`
export const Button= styled.button`
    padding: 15px 50px;
    background-color: transparent;
    border: solid 3px white;
    border-radius: 5%;
    font-size: 1em;
`
