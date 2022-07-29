import React from 'react';
import Header from '../components/Header/header';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 45vh;
    padding-left: 10vw;
    h1{
      font-size: 3em;
      margin-bottom: 4vh;
    }
`

export default class Home extends React.Component {
  render() {
    return (
      <>
        <Header/>

        <Container>
          <h1>Star Wars Api</h1>
          <h2>Get Random info from the series</h2>
        </Container>
      </>
    );
  }
}
