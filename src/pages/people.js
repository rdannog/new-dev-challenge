import React from 'react';
import * as Api from "../services/api"
import Header from '../components/Header/header';

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
        <h1>People</h1>
        {peopleList.map((people, i)=>(
          <div key={i}>
          <h2>{people.name}</h2>
          <h3>{people.birth_year}</h3>
          <p>{people.hair_color}</p>
        </div>
        ))}
      </>
    );
  }
}
