import React, { useState, useEffect } from 'react';
import * as Api from "../services/api"
import Header from '../components/Header/header';
import * as S from "../components/styles"


const Planets = () => {
  const [planetsList, setPlanetsList] = useState([])
  const [randomPlanet, setRandomPlanet] = useState(<h2>Get random Star Wars planets info!</h2>)
  const [error, setError] = useState(false)

  useEffect(() => {
    Api.data.get("/planets").then((response) => {
      setPlanetsList(response.data.results)
    }).catch(
      setError(true)
    )
  }, []);
  const randomIndex = (a, z) => {
    return Math.floor(Math.random() * (z - a)) + a;
  };
    
  const handleClick = () => {
    const allPlanets = planetsList.map((planet,i)=>(
      <S.Card key={i}>
        <S.Title>{planet.name}</S.Title>
        <p>Population: {planet.population}</p>
        <p>Climate: {planet.climate}</p>
      </S.Card>
     ))
    setRandomPlanet(allPlanets[randomIndex(0, allPlanets.length)]);
  };

  return (
    <>
      <S.GlobalStyle/>
      <Header/>
      <S.Container>
      {error ? (
            <S.Card>
            {randomPlanet}
          </S.Card>
          ): <h2>Get random Star Wars planets info!</h2>
          }
        <S.Button onClick={handleClick}>Randomize</S.Button>
      </S.Container>
    </>
  );
}

export default Planets
