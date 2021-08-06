import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Graphic from "./Graphic";
import "./Pestanas.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";

const Pestanas = () => {
  let { path } = useRouteMatch();

  return (
    <Tabs
      eventKey="profile"
      id="uncontrolled-tab-example"
      className="container o-container active"
    >
      <Tab eventKey="home" title="Posición vs. Tiempo">
        <Switch>
          <Route path={`${path}/:user`}>
            <Graphic></Graphic>
          </Route>
        </Switch>
      </Tab>
      <Tab eventKey="profile" title="Velocidad vs. Tiempo">
        <Graphic></Graphic>
      </Tab>
    </Tabs>
  );
};
export default Pestanas;
