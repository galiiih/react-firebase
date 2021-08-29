import React, { Component } from "react";
// import JumbotronComponent from "../../../Component/JumbotronComponent";
import NavbarComponent from "../../../Component/NavbarComponent";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "../login/Login";
import Register from "../register/Register";
import { store } from "../../../config/redux/index";
import { Provider } from "react-redux";
import Dashboard from "../Dashboard/Dashboard";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <NavbarComponent />
          {/* <JumbotronComponent /> */}
          <Router>
            <Route path="/" exact >
              <Dashboard/>  
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/register" exact>
              <Register />
            </Route>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
