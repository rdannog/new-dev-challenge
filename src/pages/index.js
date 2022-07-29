import React from 'react';
import Header from '../components/Header/header';
import * as S from '../components/styles'

const Home = () => {
    return (
      <>
        <Header/>
        <S.GlobalStyle/>
        <S.HomeContainer>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/694px-Star_Wars_Logo.svg.png' alt=''/>
          <h2>Get Random info from swapiAPI!</h2>
        </S.HomeContainer>
      </>
    );
}

export default Home