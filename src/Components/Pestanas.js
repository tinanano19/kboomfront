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
      <Tab eventKey="home" title="Masa 1">
        <Graphic type={0}></Graphic>
      </Tab>
      <Tab eventKey="profile" title="Masa 2">
        <Graphic type={1}></Graphic>
      </Tab>
      <Tab eventKey="home2" title="Masa 3">
        <Graphic type={2}></Graphic>
      </Tab>
    </Tabs>
  );
};
export default Pestanas;
