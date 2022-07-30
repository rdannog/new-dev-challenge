import React, {useState, useEffect} from 'react';
import * as Api from "../services/api"
import Header from '../components/Header/header';
import * as S from "../components/styles"


const People = () => {
  const [peopleList, setPeopleList] = useState([])
  const [randomPeople, setRandomPeople] = useState(<h2>Get random Star Wars  character info!</h2>)
  const [error, setError] = useState(false)

  useEffect(() => {
    Api.data.get("/people").then((response) => {
      setPeopleList(response.data.results)
    }).catch(
      setError(true)
    )
  }, []);

  const randomIndex = (a, z) => {
    return Math.floor(Math.random() * (z - a)) + a;
  };
    
  const handleClick = () => {
    const allPeople = peopleList.map((people, i)=>(
      <S.Card key={i}>
      <p style={{textAlign:"center"}}>{people.name} was born on year {people.birth_year} and has {people.hair_color} hair color</p>
    </S.Card>
    ))
    setRandomPeople(allPeople[randomIndex(0, allPeople.length)])
  };

    return (
      <>
        <S.GlobalStyle/>
        <Header/>
        <S.Container>
        {error ? (
            <S.Card>
            {randomPeople}
          </S.Card>
          ): <h2>Get random Star Wars character info!</h2>
          }
            <S.Button onClick={handleClick}>Randomize</S.Button>
        </S.Container>
      </>
    );
}
export default People
