import React from 'react';
import * as Api from "../services/api"
import Header from '../components/Header/header';
import * as S from "../components/styles"


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
        <S.Container>
        {speciesList.map((specie,i)=>(
          <S.Card key={i}>
          <h2>{specie.name}</h2>
          <p>Language: {specie.language}</p>
          <p>Skin colors: {specie.skin_colors}</p>
        </S.Card>
        ))}
        </S.Container>
      </>
    );
  }
}
