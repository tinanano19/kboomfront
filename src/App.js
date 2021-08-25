import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import Tabs from "./Components/Pestanas";
import Graphic from "./Components/Graphic";

function App() {
  return (
    <div className="App">
      <NavBar> </NavBar>{" "}
      <Router>
        <Switch>
          <Route path="/:user" component={<Graphic> </Graphic>}>
            <Tabs></Tabs>{" "}
          </Route>{" "}
        </Switch>{" "}
      </Router>{" "}
    </div>
  );
}

export default App;
