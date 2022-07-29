import React from 'react';
import * as Api from "../services/api"
import Header from '../components/Header/header';
import * as S from "../components/styles"


export default class People extends React.Component {
  state = {
    peopleList: [],
    randomPeople:"Get a random Star Wars character!"
  };

  async componentDidMount() {
    const response = await Api.data.get("/people");
    this.setState({
      peopleList: response.data.results
    });
  }
  randomIndex = (a, z) => {
    return Math.floor(Math.random() * (z - a)) + a;
  };
    
  handleClick = () => {
    const {peopleList} = this.state
    const allPeople = peopleList.map((people, i)=>(
      <S.Card key={i}>
      <p>{people.name} was born on year {people.birth_year} and has {people.hair_color} hair color</p>
    </S.Card>
    ))
    this.setState({
      randomPeople: allPeople[this.randomIndex(0, allPeople.length)]
    });
  };

  render() {
    
    return (
      <>
        <Header/>
        <S.Container>
            <S.Card>
              <h2>{this.state.randomPeople}</h2>
            </S.Card>
            <S.Button onClick={this.handleClick}>Randomize</S.Button>
        </S.Container>
      </>
    );
  }
}
