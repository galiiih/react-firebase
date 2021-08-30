import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUserAPI } from "../../../config/redux/actions";
import Button from "../../../Component/atoms/buttons";

const reduxState = (state) => ({
  isLoading: state.isLoading,
});

const reduxDispatch = (dispacth) => ({
  loginAPI: (data) => dispacth(loginUserAPI(data)),
});

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleLoginSubmit = async () => {
    const { email, password } = this.state;
    const user = await this.props
      .loginAPI({ email, password })
      .catch((err) => err);
    if (user) {
      console.log("Login Sukses", user);
      localStorage.setItem('dataUser', JSON.stringify(user))
      this.setState({
        email: "",
        password: "",
      });
      window.location.href = "/dashboard";
    } else {
      console.log("Login Gagal  ");
    }
  };

  render() {
    return (
      <>
        <div className="auth-container">
          <div className="auth-card">
            <p className="auth-title">Login Page</p>
            <input
              id="email"
              className="input"
              placeholder="Email"
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <input
              id="password"
              className="input"
              placeholder="Password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <Button
              onClick={this.handleLoginSubmit}
              title="Login"
              loading={this.props.isLoading}
            />
          </div>
        </div>
      </>
    );
  }
}

export default connect(reduxState, reduxDispatch)(Login);
