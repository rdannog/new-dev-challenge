import React from 'react';
import * as Api from "../services/api"
import Header from '../components/Header/header';

export default class Planets extends React.Component {
  state = {
    planetsList: []
  };

  async componentDidMount() {
    const response = await Api.data.get("/planets");
    this.setState({
      planetsList: response.data.results
    });
    console.log(response)
  }

  render() {
    const {planetsList} = this.state
    return (
      <>
        <Header/>
        <h1>Planets</h1>
        {planetsList.map((planet,i)=>(
          <>
            <div key={i}>
              <h2>{planet.name}</h2>
              <p>Population: {planet.population}</p>
              <p>Climate: {planet.climate}</p>
            </div>
          </>
        ))}
      </>
    );
  }
}
