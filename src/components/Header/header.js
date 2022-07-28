import React from 'react';
import {Link} from "gatsby"
import * as S from "./style"

export default class Header extends React.Component {
  render() {
    return (
      <S.Container>
        <S.GlobalStyle/>
        <ul>
            <Link to="/">
                Home
            </Link>
            <Link to="/films">
                Films
            </Link>
            <Link to="/people">
                People
            </Link>
            <Link to="/planets">
                Planets
            </Link>
            <Link to="/species">
                Species
            </Link>
            <Link to="/starships">
                Starships
            </Link>
            <Link to="/vehicle">
                Vehicle
            </Link>
        </ul>
      </S.Container>
    );
  }
}
