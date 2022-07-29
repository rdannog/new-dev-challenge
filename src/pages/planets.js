import React from 'react';
import * as Api from "../services/api"
import Header from '../components/Header/header';
import * as S from "../components/styles"


export default class Planets extends React.Component {
  state = {
    planetsList: [],
    randomPlanet:"Get random Star Wars planet!"
  };

  async componentDidMount() {
    const response = await Api.data.get("/planets");
    this.setState({
      planetsList: response.data.results
    });
  }
  randomIndex = (a, z) => {
    return Math.floor(Math.random() * (z - a)) + a;
  };
    
  handleClick = () => {
    const {planetsList} = this.state
    const allPlanets = planetsList.map((planet,i)=>(
      <S.Card key={i}>
        <h2>{planet.name}</h2>
        <p>Population: {planet.population}</p>
        <p>Climate: {planet.climate}</p>
      </S.Card>
     ))
    this.setState({
      randomPlanet: allPlanets[this.randomIndex(0, allPlanets.length)]
    });
  };

  render() {
    return (
      <>
        <Header/>
        <S.Container>
          <S.Card>
            <h2>{this.state.randomPlanet}</h2>
          </S.Card>
          <S.Button onClick={this.handleClick}>Randomize</S.Button>
        </S.Container>
      </>
    );
  }
}
