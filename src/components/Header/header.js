import React from 'react';
import { Helmet } from 'react-helmet';
import * as S from "./style"
import MobileNav from './mobileNav';

export default class Header extends React.Component {
  render() {
    return (
      <S.Navigation>
        <Helmet>
          <title>Star Wars Api</title>
          <style>
          @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Encode+Sans&display=swap');          
          </style>
          <link rel="icon" type="image/x-icon" href="https://www.pngkey.com/png/detail/36-364173_free-icons-png-star-wars-logo-png.png"/>
        </Helmet>        
        <S.GlobalStyle/>
        <MobileNav/>
        <S.Container>
            <S.StyledLink to="/">
                Home
            </S.StyledLink>
            <S.StyledLink to="/films">
                Films
            </S.StyledLink>
            <S.StyledLink to="/people">
                People
            </S.StyledLink>
            <S.StyledLink to="/planets">
                Planets
            </S.StyledLink>
            <S.StyledLink to="/species">
                Species
            </S.StyledLink>
            <S.StyledLink to="/starships">
                Starships
            </S.StyledLink>
            <S.StyledLink to="/vehicle">
                Vehicle
            </S.StyledLink>
        </S.Container>
      </S.Navigation>
    );
  }
}
