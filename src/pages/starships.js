import React from 'react';
import * as Api from "../services/api"
import Header from '../components/Header/header';
import * as S from "../components/styles"


export default class Starships extends React.Component {
  state = {
    starshipsList: []
  };

  async componentDidMount() {
    const response = await Api.data.get("/starships");
    this.setState({
      starshipsList: response.data.results
    });
    console.log(response)
  }

  render() {
    const {starshipsList} = this.state
    return (
      <>
        <Header/>
        <S.Container>
        {starshipsList.map((starship, i)=>(
           <S.Card key={i}>
           <h2>{starship.name}</h2>
           <h3>{starship.manufacturer}</h3>
           <p>{starship.model}</p>
         </S.Card>
        ))}
        </S.Container>
      </>
    );
  }
}
