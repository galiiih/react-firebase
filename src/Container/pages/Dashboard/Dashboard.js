import { text } from "@fortawesome/fontawesome-svg-core";
import React, { Component } from "react";
import { Fragment } from "react";
import { connect } from "react-redux";
import {
  addDataToAPI,
  deleteDataAPI,
  getDataFromAPI,
  updateDataAPI,
} from "../../../config/redux/actions";
import "./Dashboard.scss";

const reduxState = (state) => ({
  dataUser: state.user,
  profil: state.profil,
});

const reduxDispatch = (dispatch) => ({
  saveProfil: (data) => dispatch(addDataToAPI(data)),
  getProfil: (data) => dispatch(getDataFromAPI(data)),
  updateProfil: (data) => dispatch(updateDataAPI(data)),
  deleteProfil: (data) => dispatch(deleteDataAPI(data))
});

const username = JSON.parse(localStorage.getItem('dataUser')).name || "";
const email = JSON.parse(localStorage.getItem('dataUser')).email || "";
class Home extends Component {
  state = {
    Username: username,
    Email: email,
    Password: "",
    NoHp: "",
    NoTelp: "",
    FotoProfil: null,
    Alamat: "",
    Role: "Customer",
    textBtn: "SIMPAN",
    profilId: "",
  };

  componentDidMount() {
    const dataUser = JSON.parse(localStorage.getItem("dataUser"));
    this.props.getProfil(dataUser.uid);
  }

  handleChange = (e, type) => {
    if(type == "FotoProfil"){
      this.setState({
        FotoProfil: e.target.files[0]
      })
    }else{
      this.setState({
        [type]: e.target.value,
      });
    }
  };

  handleSaveProfil = () => {
    const {
      Username,
      NoHp,
      NoTelp,
      FotoProfil,
      Alamat,
      Email,
      Password,
      Role,
      profilId,
    } = this.state;
    const { saveProfil, textBtn, updateProfil } = this.props;
    const dataUser = JSON.parse(localStorage.getItem("dataUser"));

    const data = {
      Username: Username,
      Email: Email,
      Password: Password,
      NoHp: NoHp,
      NoTelp: NoTelp,
      FotoProfil: FotoProfil,
      Alamat: Alamat,
      Role: Role,
      userId: dataUser.uid,
    };

    if (textBtn === "SIMPAN") {
      saveProfil(data);
      // this.props.getProfil(dataUser.uid);
    } else {
      data.profilId = profilId;
      updateProfil(data);
      // this.props.getProfil(dataUser.uid);
    }

    console.log(data);
  };

  updateProfil = (profil) => {
    console.log(profil);
    this.setState({
      Username: profil.data.Username,
      Email: profil.data.Email,
      Password: profil.data.Password,
      NoHp: profil.data.NoHp,
      NoTelp: profil.data.NoTelp,
      // FotoProfil: profil.data.FotoProfil,
      Alamat: profil.data.Alamat,
      textBtn: "UPDATE",
      profilId: profil.id,
    });
  };

  cancelUpdate = (profil) => {
    this.setState({
      Username: "",
      Email: "",
      Password: "",
      NoHp: "",
      NoTelp: "",
      FotoProfil: "",
      Alamat: "",
      textBtn: "SIMPAN",
    });
  };

  deleteProfil = (e, profil) => {
    e.stopPropagation(); //fungsi untuk stop function dari parent, hanya function dari childnya saja
    const { deleteProfil } = this.props;
    const dataUser = JSON.parse(localStorage.getItem("dataUser"));
    const data = {
      userId: dataUser.uid,
      profilId: profil.id
    }
    alert("yakin mau hapus?");
    deleteProfil(data);
  };

  render() {
    const { profil } = this.props;
    const { updateProfil, cancelUpdate, deleteProfil } = this;
    console.log("profil", profil);
    return (
      <div className="container">
        <div className="input-form">
          <input
            id="Username"
            placeholder="input Username"
            className="input-title"
            value={this.state.Username}
            onChange={(e) => this.handleChange(e, "Username")}
          />
          <input
            id="Email"
            placeholder="input Email"
            className="input-title"
            value={this.state.Email}
            onChange={(e) => this.handleChange(e, "Email")}
          />
          <input
            id="Password"
            placeholder="input Password"
            className="input-title"
            value={this.state.Password}
            onChange={(e) => this.handleChange(e, "Password")}
          />
          <input
            id="NoHp"
            placeholder="input NoHp"
            className="input-title"
            value={this.state.NoHp}
            onChange={(e) => this.handleChange(e, "NoHp")}
          />
          <input
            id="NoTelp"
            placeholder="input NoTelp"
            className="input-title"
            value={this.state.NoTelp}
            onChange={(e) => this.handleChange(e, "NoTelp")}
          />
          <input
            id="FotoProfil"
            placeholder="input Foto Profil"
            className="input-title"
            type="file"
            accept="image/*"
            value={this.state.FotoProfil}
            onChange={(e) => this.handleChange(e, "FotoProfil")}
          />
          <textarea
            id="Alamat"
            placeholder="input Alamat"
            className="input-content"
            value={this.state.Alamat}
            onChange={(e) => this.handleChange(e, "Alamat")}
          />
          <input
            id="Role"
            placeholder="input Role"
            className="input-title"
            value={this.state.Role}
            onChange={(e) => this.handleChange(e, "Role")}
          />
          <div className="action-wrapper">
            {this.state.textBtn === "UPDATE" ? (
              <button className="save-btn cancel" onClick={cancelUpdate}>
                CANCEL
              </button>
            ) : (
              <div />
            )}
            <button className="save-btn" onClick={this.handleSaveProfil}>
              {this.state.textBtn}
            </button>
          </div>
        </div>
        <hr />
        {profil.length > 0 ? (
          <Fragment>
            {profil.map((profil) => {
              console.log(profil,'===')
              return (
                <div
                  className="card-content"
                  key={profil.id}
                  onClick={() => updateProfil(profil)}
                >
                  <div className="delete-btn" onClick={(e) => deleteProfil(e, profil)}>
                    X
                  </div>
                  <p className="title">{profil.data.Username}</p>
                  <p className="content">{profil.data.Email}</p>
                  <p className="content">{profil.data.Password}</p>
                  <p className="content">{profil.data.NoHp}</p>
                  <p className="content">{profil.data.NoTelp}</p>
                  <p className="content">{profil.data.FotoProfil}</p>
                  <p className="content">{profil.data.Alamat}</p>
                  <p className="content">{profil.data.Role}</p>
                  
                </div>
              );
            })}
          </Fragment>
        ) : null}
      </div>
    );
  }
}

export default connect(reduxState, reduxDispatch)(Home);
