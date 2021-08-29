import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "../../../Component/atoms/buttons";
import { registerUserAPI } from "../../../config/redux/actions";
import "./Register.scss";

const reduxState = (state) => ({
  isLoading: state.isLoading,
});

const reduxDispatch = (dispacth) => ({
  registerAPI: (data) => dispacth(registerUserAPI(data)),
});

class Register extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleRegisterSubmit = async () => {
    const { email, password } = this.state;
    const user = await this.props
      .registerAPI({ email, password })
      .catch((err) => err);
    if (user) {
      console.log("Register Sukses");
      this.setState({
        email: "",
        password: "",
      });
      window.location.href = "/login";
    } else {
      console.log("Login Gagal  ");
    }
  };

  render() {
    return (
      <>
        <div className="auth-container">
          <div className="auth-card">
            <p className="auth-title">Register Page</p>
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
              onClick={this.handleRegisterSubmit}
              title="Register"
              loading={this.props.isLoading}
            />
          </div>
        </div>
      </>
    );
  }
}

export default connect(reduxState, reduxDispatch)(Register);
