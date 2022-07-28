import React from 'react';
import * as Api from "../services/api"
import Header from '../components/Header/header';

export default class Films extends React.Component {
  state = {
    filmsList: []
  };

  async componentDidMount() {
    const response = await Api.data.get("/films");
    this.setState({
      filmsList: response.data.results
    });
    console.log(response)
  }

  render() {
    const {filmsList} = this.state
    return (
      <>
        <Header/>
        <h1>Films</h1>
        {filmsList.map((film, i)=>(
          <>
            <div key={i}>
              <h2>{film.title}</h2>
              <h3>{film.release_date}</h3>
              <p>{film.opening_crawl}</p>
            </div>
          </>
        ))}
      </>
    );
  }
}
