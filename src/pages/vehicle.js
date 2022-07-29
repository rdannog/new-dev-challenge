import React from 'react';
import * as Api from "../services/api"
import Header from '../components/Header/header';
import * as S from "../components/styles"


export default class Vehicle extends React.Component {
  state = {
    vehicleList: [],
    randomVehicle:"Get random Star Wars vehicle info!"
  };

  async componentDidMount() {
    const response = await Api.data.get("/vehicles");
    this.setState({
      vehicleList: response.data.results
    });
  }
  randomIndex = (a, z) => {
    return Math.floor(Math.random() * (z - a)) + a;
  };
    
  handleClick = () => {
    const {vehicleList} = this.state
    const allVehicle = vehicleList.map((vehicle, i)=>(
      <S.Card key={i}>
      <h2>{vehicle.name}</h2>
      <p><strong>Manufacturer:</strong> {vehicle.manufacturer}</p>
      <p><strong>Model: </strong> {vehicle.model}</p>
    </S.Card>
   ))
    this.setState({
      randomVehicle: allVehicle[this.randomIndex(0, allVehicle.length)]
    });
  };
  render() {
    const {randomVehicle} = this.state
    return (
      <>
        <S.GlobalStyle/>
        <Header/>
        <S.Container>
        <S.Card>
            <h2>{randomVehicle}</h2>
          </S.Card>
          <S.Button onClick={this.handleClick}>Randomize</S.Button>
        </S.Container>
      </>
    );
  }
}
