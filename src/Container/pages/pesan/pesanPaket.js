import React, { Component } from "react";
import moment from "moment";
import { FormGroup } from "reactstrap";
import Datetime from "react-datetime";

// import css
import "react-datetime/css/react-datetime.css";
import "moment-timezone";
import "./pesanPaket.css";

const yesterday = moment().subtract(1, "day");
const valid = function (current) {
  return current.isAfter(yesterday) && current.day() !== 0;
};

export class pesanPaket extends Component {
  state = {
    tanggal: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    return (
      <>
        <div className="auth-container">
          <div className="auth-card">
            <p className="auth-title">Pesan</p>
            <input
              id="nama"
              className="input"
              placeholder="Nama"
              type="text"
              //   value={this.state.email}
              onChange={this.handleChange}
            />
            <input
              id="namaProduk"
              className="input"
              placeholder="Nama Paket"
              type="text"
              //   value={this.state.password}
              onChange={this.handleChange}
            />
            <div className="input">
              <div className="datepicker-container">
                <FormGroup>
                  <Datetime
                    required
                    id="tanggal"
                    name="tanggal"
                    timeFormat={true}
                    inputProps={{ placeholder: "masukan tanggal" }}
                    //   value={sewaStudio.tanggal}
                    isValidDate={valid}
                    //   onChange={(datetime) => setSewaStudio(datetime)}
                  />
                </FormGroup>
              </div>
            </div>
            <div className="action-wrapper">
              <button className="save-btn cancel" href="">
                Kembali
              </button>
              <button className="save-btn" href="">
                Pesan
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default pesanPaket;
