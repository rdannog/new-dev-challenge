import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    cursor: default;
}
`
export const Container = styled.div`
    background-color: aquamarine;
`