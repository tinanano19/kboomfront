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
  let { user } = useParams();

  let [points, setPoints] = useState();
  let [velocity, setVelocity] = useState();
  let [time, setTime] = useState();
  let [pointsm2, setPointsm2] = useState();
  let [velocitym2, setVelocitym2] = useState();
  let [timem2, setTimem2] = useState();
  let [pointsm3, setPointsm3] = useState();
  let [velocitym3, setVelocitym3] = useState();
  let [timem3, setTimem3] = useState();

  let [dataaX, setDataa] = useState();
  let [dataaV, setDataav] = useState();
  let [dataaXm2, setDataam2] = useState();
  let [dataaVm2, setDataavm2] = useState();
  let [dataaXm3, setDataam3] = useState();
  let [dataaVm3, setDataavm3] = useState();

  //let proxy = "https://cors-anywhere.herokuapp.com/";

  const getAllUsers = () =>
    fetch(`https://kboombackend.herokuapp.com/point/${user}`)
      .then((res) => res.json())
      .then((json) => {
        let arrayxAux = [];
        let arrayvAux = [];
        let arrayxAuxm2 = [];
        let arrayvAuxm2 = [];
        let arrayxAuxm3 = [];
        let arrayvAuxm3 = [];
        for (let i = 0; i < json.dataYx.length; i++) {
          let jsanX = { DataX: json.dataX[i], DataYx: json.dataYx[i] };
          let jsanV = { DataX: json.dataX[i], DataYv: json.dataYv[i] };
          let jsanXm2 = { DataX: json.dataXm2[i], DataYx: json.dataYxm2[i] };
          let jsanVm2 = { DataX: json.dataXm2[i], DataYv: json.dataYvm2[i] };
          let jsanXm3 = { DataX: json.dataXm3[i], DataYx: json.dataYxm3[i] };
          let jsanVm3 = { DataX: json.dataXm3[i], DataYv: json.dataYvm3[i] };

          arrayxAux.push(jsanX);
          arrayvAux.push(jsanV);
          arrayxAuxm2.push(jsanXm2);
          arrayvAuxm2.push(jsanVm2);
          arrayxAuxm3.push(jsanXm3);
          arrayvAuxm3.push(jsanVm3);
        }

        setDataa(arrayxAux);
        setDataav(arrayvAux);

        setDataam2(arrayxAuxm2);
        setDataavm2(arrayvAuxm2);

        setDataam3(arrayxAuxm3);
        setDataavm3(arrayvAuxm3);
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

  const getPointsUserm2 = () =>
    fetch(`https://kboombackend.herokuapp.com/point/${user}`)
      .then((res) => res.json())
      .then((json) => setPointsm2(json.dataYxm2));

  const getVelsUserm2 = () =>
    fetch(`https://kboombackend.herokuapp.com/point/${user}`)
      .then((res) => res.json())
      .then((json) => setVelocitym2(json.dataYvm2));

  const getTimeUserm2 = () =>
    fetch(`https://kboombackend.herokuapp.com/point/${user}`)
      .then((res) => res.json())
      .then((json) => setTimem2(json.dataXm2));

  const getPointsUserm3 = () =>
    fetch(`https://kboombackend.herokuapp.com/point/${user}`)
      .then((res) => res.json())
      .then((json) => setPointsm3(json.dataYxm3));

  const getVelsUserm3 = () =>
    fetch(`https://kboombackend.herokuapp.com/point/${user}`)
      .then((res) => res.json())
      .then((json) => setVelocitym3(json.dataYvm3));

  const getTimeUserm3 = () =>
    fetch(`https://kboombackend.herokuapp.com/point/${user}`)
      .then((res) => res.json())
      .then((json) => setTimem3(json.dataXm3));

  useEffect(() => {
    getPointsUser();
    getTimeUser();
    getVelsUser();
    getAllUsers();
    getPointsUserm2();
    getVelsUserm2();
    getTimeUserm2();
    getPointsUserm3();
    getVelsUserm3();
    getTimeUserm3();

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

  const datam2 = {
    labels: timem2,
    datasets: [
      {
        label: "Posición",
        data: pointsm2,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  const data2m2 = {
    labels: timem2,
    datasets: [
      {
        label: "Velocidad",
        data: velocitym2,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  const datam3 = {
    labels: timem3,
    datasets: [
      {
        label: "Posición",
        data: pointsm3,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  const data2m3 = {
    labels: timem3,
    datasets: [
      {
        label: "Velocidad",
        data: velocitym3,
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
            element={<button className="o-button"> Exportar a Excel </button>}
            filename="Posicion Vs Tiempo"
          >
            <ExcelSheet data={dataaX} name="Posicion Vs Tiempo">
              <ExcelColumn label="Tiempo" value="DataX" />
              <ExcelColumn label="Posicion" value="DataYx" />
            </ExcelSheet>
          </ExcelFile>
          <div className="container">
            <h1 className="title">Velocidad vs. Tiempo</h1>
          </div>
          <div className="container">
            <Line data={data2} options={options} />
            <br></br>
            <br></br>
          </div>
          <ExcelFile
            element={<button className="o-button"> Exportar a Excel </button>}
            filename="Velocidad vs. Tiempo"
          >
            <ExcelSheet data={dataaV} name="Velocidad Vs Tiempo">
              <ExcelColumn label="Tiempo" value="DataX" />
              <ExcelColumn label="Velocidad" value="DataYv" />
            </ExcelSheet>
          </ExcelFile>
        </>
      )}
      {type === 1 && (
        <>
          <div className="container">
            <h1 className="title">Posición vs. Tiempo</h1>
          </div>
          <div className="container">
            <Line data={datam2} options={options} />
            <br></br>
            <br></br>
          </div>
          <ExcelFile
            element={<button className="o-button"> Exportar a Excel </button>}
            filename="Posicion Vs Tiempo"
          >
            <ExcelSheet data={dataaXm2} name="Posicion Vs Tiempo">
              <ExcelColumn label="Tiempo" value="DataX" />
              <ExcelColumn label="Posicion" value="DataYx" />
            </ExcelSheet>
          </ExcelFile>
          <div className="container">
            <h1 className="title">Velocidad vs. Tiempo</h1>
          </div>
          <div className="container">
            <Line data={data2m2} options={options} />
            <br></br>
            <br></br>
          </div>
          <ExcelFile
            element={<button className="o-button"> Exportar a Excel </button>}
            filename="Velocidad vs. Tiempo"
          >
            <ExcelSheet data={dataaVm2} name="Velocidad Vs Tiempo">
              <ExcelColumn label="Tiempo" value="DataX" />
              <ExcelColumn label="Velocidad" value="DataYv" />
            </ExcelSheet>
          </ExcelFile>
        </>
      )}
      {type === 2 && (
        <>
          <div className="container">
            <h1 className="title">Posición vs. Tiempo</h1>
          </div>
          <div className="container">
            <Line data={datam3} options={options} />
            <br></br>
            <br></br>
          </div>
          <ExcelFile
            element={<button className="o-button"> Exportar a Excel </button>}
            filename="Posicion Vs Tiempo"
          >
            <ExcelSheet data={dataaXm3} name="Posicion Vs Tiempo">
              <ExcelColumn label="Tiempo" value="DataX" />
              <ExcelColumn label="Posicion" value="DataYx" />
            </ExcelSheet>
          </ExcelFile>
          <div className="container">
            <h1 className="title">Velocidad vs. Tiempo</h1>
          </div>
          <div className="container">
            <Line data={data2m3} options={options} />
            <br></br>
            <br></br>
          </div>
          <ExcelFile
            element={<button className="o-button"> Exportar a Excel </button>}
            filename="Velocidad vs. Tiempo"
          >
            <ExcelSheet data={dataaVm3} name="Velocidad Vs Tiempo">
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
