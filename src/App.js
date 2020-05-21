import React from 'react';
import Home from './Home';
import Done from './Done';
import Apointment from './Apointment';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/apt">
            <Apointment />
          </Route>
          <Route path="/done">
            <Done />
          </Route>
          <Route path="/">
            <Home />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
