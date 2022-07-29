import React, { useState, useEffect }  from 'react';
import * as Api from "../services/api"
import Header from '../components/Header/header';
import * as S from "../components/styles"


const Vehicle = () => {
  const [vehicleList, setVehicleList] = useState([])
  const [randomVehicle, setRandomVehicle] = useState(<h2>Get random Star Wars vehicle info!</h2>)
  const [error, setError] = useState(false)

  useEffect(() => {
    Api.data.get("/vehicles").then((response) => {
      setVehicleList(response.data.results)
    }).catch(
      setError(true)
    )
  }, []);

  const randomIndex = (a, z) => {
    return Math.floor(Math.random() * (z - a)) + a;
  };
    
  const handleClick = () => {
    const allVehicle = vehicleList.map((vehicle, i)=>(
      <S.Card key={i}>
      <S.Title>{vehicle.name}</S.Title>
      <p><strong>Manufacturer:</strong> {vehicle.manufacturer}</p>
      <p><strong>Model: </strong> {vehicle.model}</p>
    </S.Card>
   ))
    setRandomVehicle(allVehicle[randomIndex(0, allVehicle.length)]
    );
  };

    return (
      <>
        <S.GlobalStyle/>
        <Header/>
        <S.Container>
        {error ? (
          <S.Card>
            {randomVehicle}
          </S.Card>
          ): <h2>Loading info</h2>
        }
          <S.Button onClick={handleClick}>Randomize</S.Button>
        </S.Container>
      </>
    );
  }
export default Vehicle
