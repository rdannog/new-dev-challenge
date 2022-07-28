import React from 'react';
import * as Api from "../services/api"
import Header from '../components/Header/header';

export default class Vehicle extends React.Component {
  state = {
    vehicleList: []
  };

  async componentDidMount() {
    const response = await Api.data.get("/vehicles");
    this.setState({
      vehicleList: response.data.results
    });
    console.log(response)
  }

  render() {
    const {vehicleList} = this.state
    return (
      <>
        <Header/>
        <h1>Vehicle</h1>
        {vehicleList.map((vehicle,i)=>(
          <>
            <div key={i}>
              <h2>{vehicle.name}</h2>
              <p>{vehicle.manufacturer}</p>
              <p>{vehicle.model}</p>
            </div>
          </>
        ))}
      </>
    );
  }
}
