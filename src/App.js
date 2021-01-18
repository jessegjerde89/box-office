import React from "react";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        This is the home page
      </Route>

      <Route exact path="/start"> This is starred
      </Route>

    <Route>
      This is a 404 page 
    </Route>

    </Switch>
  );
}

export default App;
