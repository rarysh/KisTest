import React, { Fragment } from "react";

import { Route, Switch, BrowserRouter } from "react-router-dom";

import Funcionality from './Funcionality/index'

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Funcionality} />
          <Route path="/test" component={Funcionality} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
