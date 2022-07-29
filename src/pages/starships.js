import React, { useState, useEffect }  from 'react';
import * as Api from "../services/api"
import Header from '../components/Header/header';
import * as S from "../components/styles"


const Starships = () => {
  const [starshipsList, setStarshipsList] = useState([])
  const [random, setRandom] = useState(<h2>Get random Star Wars starships info!</h2>)
  const [error, setError] = useState(false)

  useEffect(() => {
    Api.data.get("/starships").then((response) => {
      setStarshipsList(response.data.results)
    }).catch(
      setError(true)
    )
  }, []);

  const randomIndex = (a, z) => {
    return Math.floor(Math.random() * (z - a)) + a;
  };
    
  const handleClick = () => {
    const allStarships = starshipsList.map((starship, i)=>(
      <S.Card key={i}>
      <S.Title>{starship.name}</S.Title>
      <p>{starship.manufacturer}</p>
      <p>{starship.model}</p>
    </S.Card>
   ))
    setRandom(allStarships[randomIndex(0, allStarships.length)]
    );
  };

    return (
      <>
        <S.GlobalStyle/>
        <Header/>
        <S.Container>
        {error ? (
            <S.Card>
            {random}
          </S.Card>
          ): <h2>Get random Star Wars starships info!</h2>
          }
          <S.Button onClick={handleClick}>Randomize</S.Button>
        </S.Container>
      </>
    );
  }
export default Starships