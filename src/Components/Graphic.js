import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Line } from "react-chartjs-2";
import ExportExcel from "react-export-excel";
import "./Graphic.css";

const ExcelFile = ExportExcel.ExcelFile;
const ExcelSheet = ExportExcel.ExcelSheet;
const ExcelColumn = ExportExcel.ExcelColumn;

const URI = process.env.REACT_APP_URI;

const Graphic = ({ type }) => {
  //const [points, setPoints] = useState();
  let [points, setPoints] = useState();
  let [velocity, setVelocity] = useState();
  let [time, setTime] = useState();
  let { user } = useParams();
  let [dataaX, setDataa] = useState();
  let [dataaV, setDataav] = useState();
  //let proxy = "https://cors-anywhere.herokuapp.com/";

  const getAllUsers = () =>
    fetch(`https://kboombackend.herokuapp.com/point/${user}`)
      .then((res) => res.json())
      .then((json) => {
        let arrayxAux = [];
        let arrayvAux = [];
        for (let i = 0; i < json.dataYx.length; i++) {
          let dataXaux = json.dataX[i];
          let dataYxaux = json.dataYx[i];
          let dataYvaux = json.dataYv[i];
          let jsanX = { DataX: dataXaux, DataYx: dataYxaux };
          let jsanV = { DataX: dataXaux, DataYv: dataYvaux };
          arrayxAux.push(jsanX);
          arrayvAux.push(jsanV);
        }
        //console.log(arrayp);
        setDataa(arrayxAux);
        setDataav(arrayvAux);
      });

  const getPointsUser = () =>
    fetch(`https://kboombackend.herokuapp.com/point/${user}`)
      .then((res) => res.json())
      .then((json) => setPoints(json.dataYx));

  const getVelsUser = () =>
    fetch(`https://kboombackend.herokuapp.com/point/${user}`)
      .then((res) => res.json())
      .then((json) => setVelocity(json.dataYv));

  const getTimeUser = () =>
    fetch(`https://kboombackend.herokuapp.com/point/${user}`)
      .then((res) => res.json())
      .then((json) => setTime(json.dataX));

  useEffect(() => {
    getPointsUser();
    getTimeUser();
    getVelsUser();
    getAllUsers();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const data = {
    labels: time,
    datasets: [
      {
        label: "Posición",
        data: points,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  const data2 = {
    labels: time,
    datasets: [
      {
        label: "Velocidad",
        data: velocity,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  const options = {
    scales: {
      xAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Tiempo (s)",
          },
        },
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Velocidad (m/s)",
          },
        },
      ],
    },
    elements: {
      line: {
        borderWidth: 1,
        fill: false,
      },
      point: {
        radius: 2,
        borderWidth: 4,
        backgroundColor: "white",
        hoverRadius: 8,
        hoverBorderWidth: 4,
      },
    },
  };

  return (
    <div>
      {type === 0 && (
        <>
          <div className="container">
            <h1 className="title">Posición vs. Tiempo</h1>
          </div>
          <div className="container">
            <Line data={data} options={options} />
            <br></br>
            <br></br>
          </div>
          <ExcelFile
            element={<button className="o-button"> Export a Excel </button>}
            filename="Posicion Vs Tiempo"
          >
            <ExcelSheet data={dataaX} name="Posicion Vs Tiempo">
              <ExcelColumn label="Tiempo" value="DataX" />
              <ExcelColumn label="Posicion" value="DataYx" />
            </ExcelSheet>
          </ExcelFile>
        </>
      )}
      {type === 1 && (
        <>
          <div className="container">
            <h1 className="title">Velocidad vs. Tiempo</h1>
          </div>
          <div className="container">
            <Line data={data2} options={options} />
            <br></br>
            <br></br>
          </div>
          <ExcelFile
            element={<button className="o-button"> Export a Excel </button>}
            filename="Velocidad vs. Tiempo"
          >
            <ExcelSheet data={dataaV} name="Velocidad Vs Tiempo">
              <ExcelColumn label="Tiempo" value="DataX" />
              <ExcelColumn label="Velocidad" value="DataYv" />
            </ExcelSheet>
          </ExcelFile>
        </>
      )}
    </div>
  );
};
console.log(URI + "/users");
export default Graphic;
