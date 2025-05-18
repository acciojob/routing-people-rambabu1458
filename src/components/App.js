import React from "react";
import "./../styles/App.css";
import UserDetails from "./UserDetails";
import UserList from "./UserList";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <UserList />
            </Route>
            <Route exact path="/users/:id">
              <UserDetails />
            </Route>
          </Switch>
        </BrowserRouter>
      
    </div>
  );
};

export default App;
