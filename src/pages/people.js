import React from 'react';
import * as Api from "../services/api"
import Header from '../components/Header/header';
import * as S from "./styles"


export default class People extends React.Component {
  state = {
    peopleList: []
  };

  async componentDidMount() {
    const response = await Api.data.get("/people");
    this.setState({
      peopleList: response.data.results
    });
    console.log(response)
  }

  render() {
    const {peopleList} = this.state
    return (
      <>
        <Header/>
        <S.Title>People</S.Title>
        <S.Container>
        {peopleList.map((people, i)=>(
          <S.Card key={i}>
          <h2>{people.name}</h2>
          <h3>{people.birth_year}</h3>
          <p>{people.hair_color}</p>
        </S.Card>
        ))}
        </S.Container>
      </>
    );
  }
}
