import React, { Component } from "react";
// import JumbotronComponent from "../../../Component/JumbotronComponent";
import NavbarComponent from "../../../Component/NavbarComponent";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "../login/Login";
import Register from "../register/Register";
import { store } from "../../../config/redux/index";
import { Provider } from "react-redux";
import Profil from "../profile/profil";
import kelolaProduk from "../kelolaProduk/kelolaProduk";
import forgotPassword from "../forgotPassword/forgotPassword";
import pesanPaket from "../pesan/pesanPaket";
import kategori from "../kategori/kategori";

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
            <Route path="/profil" component={Profil}/>
            <Route path="/register" component={Register}/>
            <Route path="/kelolaProduk" component={kelolaProduk}/>
            <Route path="/forgotPassword" component={forgotPassword}/>
            <Route path="/pesan/paket" component={pesanPaket}/>
            <Route path="/kategori" component={kategori}/>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
