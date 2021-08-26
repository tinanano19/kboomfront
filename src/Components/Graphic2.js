import React, { Component, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Line } from "react-chartjs-2";
import ExportExcel from "react-export-excel";

const ExcelFile = ExportExcel.ExcelFile;
const ExcelSheet = ExportExcel.ExcelSheet;
const ExcelColumn = ExportExcel.ExcelColumn;

const URI = process.env.REACT_APP_URI;

class Graphic2 extends Component {
  constructor({ type }) {
    super({ type });
    this.type = type;
    this.state = {
      points: [],
      velocity: [],
      time: [],
      user: this.props.user,
      dataE: [],
    };
  }

  componentDidMount = () => {
    fetch(`https://kboombackend.herokuapp.com/point/${this.user}`)
      .then((res) => res.json())
      .then((json) => {
        this.setState({ points: json.dataYx });
        this.setState({ velocity: json.dataYv });
        this.setState({ time: json.dataX });
      });
  };

  render() {
    const data = {
      labels: this.time,
      datasets: [
        {
          label: "Posición",
          data: this.points,
          fill: false,
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgba(255, 99, 132, 0.2)",
        },
      ],
    };

    const data2 = {
      labels: this.time,
      datasets: [
        {
          label: "Velocidad",
          data: this.velocity,
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
        {this.statetype === 0 && (
          <>
            <div className="container">
              <h1 className="title">Posición vs. Tiempo</h1>
            </div>
            <div className="container">
              <Line data={data} options={options} />
              <br></br>
              <br></br>
            </div>
          </>
        )}
        {this.type === 1 && (
          <>
            <div className="container">
              <h1 className="title">Velocidad vs. Tiempo</h1>
            </div>
            <div className="container">
              <Line data={data2} options={options} />
              <br></br>
              <br></br>
            </div>
          </>
        )}
        <ExcelFile
          element={<button> Export a Excel </button>}
          filename="Excel Example"
        >
          <ExcelSheet data={this.points}>
            <ExcelColumn label="0" name="tiempo" />
            <ExcelColumn label="datasets[0]" name="posicion" />
          </ExcelSheet>
        </ExcelFile>
      </div>
    );
  }
}

export default Graphic2;
