import React, { Component } from "react";
import Button from "../../../Component/atoms/buttons";
import { connect } from "react-redux";

const reduxState = (state) => ({
  isLoading: state.isLoading,
});

const reduxDispatch = (dispacth) => ({
  // loginAPI: (data) => dispacth(loginUserAPI(data)),
});

export class forgotPassword extends Component {
  state = {
    email: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleForgotPasswordSubmit = () => {};

  render() {
    return (
      <>
        <div className="auth-container">
          <div className="auth-card">
            <p className="auth-title">Forgot Password</p>
            <input
              id="email"
              className="input"
              placeholder="Email"
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <Button
              title="Submit"
              onClick={this.handleForgotPasswordSubmit}
              loading={this.props.isLoading}
            />
          </div>
        </div>
      </>
    );
  }
}

export default connect(reduxState, reduxDispatch)(forgotPassword);
