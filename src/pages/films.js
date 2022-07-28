import React from 'react';
import * as Api from "../services/api"
import Header from '../components/Header/header';
import * as S from "../components/styles"

export default class Films extends React.Component {
  state = {
    allFilms:[],
    filmsList: [],
    randomTitle:''
  };

  async componentDidMount() {
    const response = await Api.data.get("/films");
    this.setState({
      allFilms: response.data.results
    });
   
  }
  randomIndex = (a, z) => {
    return Math.floor(Math.random() * (z - a) + a);
  };
    
  handleClick = () => {
    this.setState({
      filmsList: this.state.allFilms.map(item => ([...item.opening_crawl])),
      randomTitle: this.state.filmsList[this.randomIndex(0, this.state.filmsList.length)]

    });
  };

  render() {
    const { randomTitle } = this.state
    return (
      <>
        <Header />
        <S.Title>Films</S.Title>
        <S.Container>
            <S.Card>
                <h2>{randomTitle}</h2>
                <button onClick={this.handleClick}>Clica ai</button>
            </S.Card>
        </S.Container>
        </>
    );
  }
}
