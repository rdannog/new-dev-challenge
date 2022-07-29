import React, { useState, useEffect } from 'react';
import * as Api from "../services/api"
import Header from '../components/Header/header';
import * as S from "../components/styles"

const Films = () => {
  const [allFilms, setAllFilms] = useState([])
  const [randomData, setRandomData] = useState(<h2>Get random Star Wars film opening!</h2>)
  const [error, setError] = useState(false)

  useEffect(() => {
    Api.data.get("/films").then((response) => {
      setAllFilms(response.data.results)
    }).catch(
      setError(true)
    )
  }, []);

  const randomIndex = (a, z) => {
    return Math.floor(Math.random() * (z - a)) + a;
  };
    
  const handleClick = () => {
    

    const filmsList = allFilms.map((item, i) => (
      <S.Card key={i}>
        <S.Title>{item.title}</S.Title>
        <p>{item.opening_crawl}</p>
      </S.Card>
      ))

      setRandomData(filmsList[randomIndex(0, filmsList.length)])
  };

    return (
      <>
        <S.GlobalStyle/>
        <Header />
        <S.Container>
          {error ? (
            <S.Card>
            {randomData}
          </S.Card>
          ): <h2>Get random Star Wars film opening!</h2>
          }
          <S.Button onClick={handleClick}>Randomize</S.Button>
        </S.Container>
        </>
    );
}

export default Films