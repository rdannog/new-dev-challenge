import React, { useState, useEffect }  from 'react';
import * as Api from "../services/api"
import Header from '../components/Header/header';
import * as S from "../components/styles"


const Species = () => {
  const [speciesList, setSpeciesList] = useState([])
  const [randomSpecie, setRandomSpecie] = useState(<h2>Get random Star Wars species info!</h2>)
  const [error, setError] = useState(false)

  useEffect(() => {
    Api.data.get("/species").then((response) => {
      setSpeciesList(response.data.results)
    }).catch(
      setError(true)
    )
  }, []);
  const randomIndex = (a, z) => {
    return Math.floor(Math.random() * (z - a)) + a;
  };
    
  const handleClick = () => {
    const allSpecies = speciesList.map((specie,i)=>(
      <S.Card key={i}>
      <S.Title>{specie.name}</S.Title>
      <p>Language: {specie.language}</p>
      <p>Skin colors: {specie.skin_colors}</p>
    </S.Card>
    ))
    setRandomSpecie(allSpecies[randomIndex(0, allSpecies.length)]
    );
  };

    return (
      <>
        <S.GlobalStyle/>
        <Header/>
        <S.Container>
        {error ? (
            <S.Card>
            {randomSpecie}
          </S.Card>
          ): <h2>Get random Star Wars film opening!</h2>
          }
          <S.Button onClick={handleClick}>Randomize</S.Button>
        </S.Container>
      </>
    );
  }
export default Species
