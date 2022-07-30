import React from 'react';
import * as S from "./style"

const MobileNav = () => {
  
    return (
      <S.Menu>
      <input type="checkbox" id="check"/>
      <S.Label for="check">
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 172 172" style={{ cursor:"pointer"}}><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode: "normal"}}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffff"><path d="M14.33333,35.83333v14.33333h143.33333v-14.33333zM14.33333,78.83333v14.33333h143.33333v-14.33333zM14.33333,121.83333v14.33333h143.33333v-14.33333z"></path></g></g></svg>
      </S.Label>
      <S.Nav>
      <S.ContainerMobile>
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
        </S.ContainerMobile>
      </S.Nav>
  </S.Menu>
    );
  }

export default MobileNav