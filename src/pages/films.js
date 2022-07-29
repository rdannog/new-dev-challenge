import React from 'react';
import * as Api from "../services/api"
import Header from '../components/Header/header';
import * as S from "../components/styles"

export default class Films extends React.Component {
  state = {
    allFilms:[],
    randomData:'Get a random Star Wars film opening!'
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
    const filmsList = this.state.allFilms.map(item => (
      <>
        <h2>{item.title}</h2>
        <p>{item.opening_crawl}</p>
      </>
      ))
    this.setState({
      randomData: filmsList[this.randomIndex(0, filmsList.length)]
    });
  };

  render() {
    const { randomData } = this.state
    return (
      <>
        <Header />
        <S.Container>
            <S.HomeButton to="/">Go Home!</S.HomeButton>
            <S.Card>
                <h2>{randomData}</h2>
            </S.Card>
            <S.Button onClick={this.handleClick}>Randomize</S.Button>
        </S.Container>
        </>
    );
  }
}
