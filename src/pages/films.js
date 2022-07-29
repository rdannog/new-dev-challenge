import React from 'react';
import * as Api from "../services/api"
import Header from '../components/Header/header';
import * as S from "../components/styles"

export default class Films extends React.Component {
  state = {
    allFilms:[],
    randomTitle:'Get random opening crawl'
  };

  async componentDidMount() {
    const response = await Api.data.get("/films");
    this.setState({
      allFilms: response.data.results
    });
   
  }
  randomIndex = (a, z) => {
    return Math.floor(Math.random() * (z - a)) + a;
  };
    
  handleClick = () => {
    const filmsList = this.state.allFilms.map(item => ([item.opening_crawl]))
    this.setState({
      randomTitle: filmsList[this.randomIndex(0, filmsList.length)]

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
