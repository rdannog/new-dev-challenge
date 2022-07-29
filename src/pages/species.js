import React from 'react';
import * as Api from "../services/api"
import Header from '../components/Header/header';
import * as S from "../components/styles"


export default class Species extends React.Component {
  state = {
    speciesList: [],
    randomSpecie:"Get random Star Wars specie!"
  };

  async componentDidMount() {
    const response = await Api.data.get("/species");
    this.setState({
      speciesList: response.data.results
    })
  }
  randomIndex = (a, z) => {
    return Math.floor(Math.random() * (z - a)) + a;
  };
    
  handleClick = () => {
    const {speciesList} = this.state
    const allSpecies = speciesList.map((specie,i)=>(
      <S.Card key={i}>
      <h2>{specie.name}</h2>
      <p>Language: {specie.language}</p>
      <p>Skin colors: {specie.skin_colors}</p>
    </S.Card>
    ))
    this.setState({
      randomSpecie: allSpecies[this.randomIndex(0, allSpecies.length)]
    });
  };

  render() {
    const {randomSpecie} = this.state
    return (
      <>
        <S.GlobalStyle/>
        <Header/>
        <S.Container>
          <S.Card>
            <h2>{randomSpecie}</h2>
          </S.Card>
          <S.Button onClick={this.handleClick}>Randomize</S.Button>
        </S.Container>
      </>
    );
  }
}
