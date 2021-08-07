import React, { useState, useEffect } from 'react';
import {useParams, useRouteMatch} from 'react-router-dom';
import { Line } from 'react-chartjs-2';

const URI = process.env.REACT_APP_URI;

const Graphic = () => {

  //const [points, setPoints] = useState();
  let [points, setPoints] = useState();
  let [time, setTime] = useState();
  let {user} = useParams();
  let proxy = "https://cors-anywhere.herokuapp.com/";

  const getPointsUser = () => 
    fetch(`https://kboombackend.herokuapp.com/point/${user}`)
    .then(res => res.json())
    .then(json => setPoints(json.dataY))

    const getTimeUser = () => 
    fetch(`https://kboombackend.herokuapp.com/point/${user}`)
    .then(res => res.json())
    .then(json => setTime(json.dataX))


 useEffect(() => {
    getPointsUser();
    getTimeUser();
  }, []);

  const data = {
    labels: time,
    datasets: [
      {
        label: 'Posición',
        data: points,
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };

  const options = {
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Tiempo (s)'
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Velocidad (m/s)'
        }
      }]
    },
    elements: {
      line: {
        borderWidth: 1,
        fill: false,
      },
      point: {
        radius: 2,
        borderWidth: 4,
        backgroundColor: 'white',
        hoverRadius: 8,
        hoverBorderWidth: 4,
      }
    }
  };


  return (

    <div>
      <div className='container'>
        <h1 className='title'>Posición vs. Tiempo</h1>

      </div>
      <div className='container'>
        <Line data={data} options={options} />
        <br></br>
        <br></br>
      </div>
        
    </div>

  );




};
console.log(URI + "/users");
export default Graphic;
