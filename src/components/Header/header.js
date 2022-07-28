import React from 'react';
import * as S from "./style"

export default class Header extends React.Component {
  render() {
    return (
      <S.Navigation>
        <S.GlobalStyle/>
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
