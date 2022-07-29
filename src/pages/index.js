import React from 'react';
import Header from '../components/Header/header';
import styled from 'styled-components';
import Font from "../fonts/SfDistantGalaxy.ttf"


const Container = styled.div`
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

export default class Home extends React.Component {
  render() {
    return (
      <>
        <Header/>

        <Container>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/694px-Star_Wars_Logo.svg.png' alt=''/>
          <h2>Get Random info from swapiAPI!</h2>
        </Container>
      </>
    );
  }
}
