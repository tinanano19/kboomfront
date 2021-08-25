import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Graphic from "./Graphic";
import "./Pestanas.css";

const Pestanas = () => {
  return (
    <Tabs
      eventKey="profile"
      id="uncontrolled-tab-example"
      className="container o-container active"
    >
      <Tab eventKey="home" title="Posición vs. Tiempo">
        <Graphic type={0}></Graphic>
      </Tab>
      <Tab eventKey="profile" title="Velocidad vs. Tiempo">
        <Graphic type={1}></Graphic>
      </Tab>
    </Tabs>
  );
};
export default Pestanas;
