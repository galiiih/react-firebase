import React, { Component } from "react";
// import JumbotronComponent from "../../../Component/JumbotronComponent";
import NavbarComponent from "../../../Component/NavbarComponent";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "../login/Login";
import Register from "../register/Register";
import { store } from "../../../config/redux/index";
import { Provider } from "react-redux";
import Dashboard from "../Dashboard/Dashboard";
import kelolaProduk from "../kelolaProduk/kelolaProduk";

class App extends Component {
  render() {

    const authentication = localStorage.getItem('dataUser');

    return (
      <Provider store={store}>
        <div>
          <NavbarComponent />
          {/* <JumbotronComponent /> */}
          <Router>
            <Route path="/login" exact component={Login}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/register" component={Register}/>
            <Route path="/kelolaProduk" component={kelolaProduk}/>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
