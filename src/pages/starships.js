import React from 'react';
import * as Api from "../services/api"
import Header from '../components/Header/header';
import * as S from "../components/styles"


export default class Starships extends React.Component {
  state = {
    starshipsList: [],
    random:"Get random Star Wars spaceships info!"
  };

  async componentDidMount() {
    const response = await Api.data.get("/starships");
    this.setState({
      starshipsList: response.data.results
    });
  }

  randomIndex = (a, z) => {
    return Math.floor(Math.random() * (z - a)) + a;
  };
    
  handleClick = () => {
    const {starshipsList} = this.state
    const allStarships = starshipsList.map((starship, i)=>(
      <S.Card key={i}>
      <h2>{starship.name}</h2>
      <p>{starship.manufacturer}</p>
      <p>{starship.model}</p>
    </S.Card>
   ))
    this.setState({
      random: allStarships[this.randomIndex(0, allStarships.length)]
    });
  };

  render() {
    const {random} = this.state
    return (
      <>
        <S.GlobalStyle/>
        <Header/>
        <S.Container>
          <S.Card>
            <h2>{random}</h2>
          </S.Card>
          <S.Button onClick={this.handleClick}>Randomize</S.Button>
        </S.Container>
      </>
    );
  }
}
