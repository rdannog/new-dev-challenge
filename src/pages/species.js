import React from 'react';
import * as Api from "../services/api"
import Header from '../components/Header/header';
import * as S from "./styles"


export default class Species extends React.Component {
  state = {
    speciesList: []
  };

  async componentDidMount() {
    const response = await Api.data.get("/species");
    this.setState({
      speciesList: response.data.results
    });
    console.log(response)
  }

  render() {
    const {speciesList} = this.state
    return (
      <>
        <Header/>
        <S.Title>Species</S.Title>
        <S.Container>
        {speciesList.map((specie,i)=>(
          <S.Card key={i}>
          <h2>{specie.name}</h2>
          <h3>Language: {specie.language}</h3>
          <p>Skin colors: {specie.skin_colors}</p>
        </S.Card>
        ))}
        </S.Container>
      </>
    );
  }
}
