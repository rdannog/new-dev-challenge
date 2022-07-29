import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    color: white;
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
    background-color: rgba(0,0,0, 0.7);
    h2{
        font-size: 2.5rem;
        margin-bottom: 7vh;
    }
    p{
        color: #FFE919;
        font-size: 1.5rem;
    }
`
export const Button= styled.button`
    padding: 15px 50px;
    background-color: transparent;
    border: solid 3px white;
    border-radius: 5%;
    font-size: 1rem;
    color:#FFE919;
    background-color: rgba(0,0,0, 0.8);
`
