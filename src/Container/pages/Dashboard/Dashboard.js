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
  downloadURL: state.downloadURL
});

const reduxDispatch = (dispatch) => ({
  saveProfil: (data) => dispatch(addDataToAPI(data)),
  getProfil: (data) => dispatch(getDataFromAPI(data)),
  updateProfil: (data) => dispatch(updateDataAPI(data)),
  deleteProfil: (data) => dispatch(deleteDataAPI(data)),
});

const email = localStorage.getItem("dataUser") ? JSON.parse(localStorage.getItem("dataUser")).email : "";
class Home extends Component {
  state = {
    Username: "",
    Email: email,
    Password: "",
    NoHp: "",
    NoTelp: "",
    FotoProfil: "",
    Progress: 0,
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
    if (type === "FotoProfil") {
      this.setState({
        FotoProfil: e.target.files[0],
      });
    } else {
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
      Progress,
      Alamat,
      Email,
      Password,
      Role,
      profilId,
      textBtn,
    } = this.state;
    
    const { saveProfil, updateProfil, downloadURL } = this.props;
    const dataUser = JSON.parse(localStorage.getItem("dataUser"));

    const data = {
      Username: Username,
      Email: Email,
      Password: Password,
      NoHp: NoHp,
      NoTelp: NoTelp,
      FotoProfil: FotoProfil,
      Progress: Progress,
      downloadURL: downloadURL,
      Alamat: Alamat,
      Role: Role,
      userId: dataUser.uid,
    };
    

    if (textBtn == "SIMPAN") {
      console.log('simpen')
      const nData = {
        ...data,
        downloadURL: this.props.downloadURL
      }
      saveProfil(nData);
      // uploadImage(data)();

      // this.props.getProfil(dataUser.uid);
    } else {
      console.log('update')

      data.profilId = profilId;
      const nData = {
        ...data,
        downloadURL: this.props.downloadURL
      }
      updateProfil(data);
      // this.props.getProfil(dataUser.uid);
    }

    this.props.getProfil(dataUser.uid);

  };

  updateProfil = (profil) => {
    console.log(profil);
    this.setState({
      Username: profil.data.Username,
      Email: profil.data.Email,
      Password: profil.data.Password,
      NoHp: profil.data.NoHp,
      NoTelp: profil.data.NoTelp,
      FotoProfil: profil.data.FotoProfil,
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
      profilId: profil.id,
    };
    alert("yakin mau hapus?");
    deleteProfil(data);
  };

  render() {
    const { profil, Progress } = this.props;
    const { updateProfil, cancelUpdate, deleteProfil, handleSaveProfil } = this;
    console.log("profil", profil);
    console.log(this.state,'ini state')
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
            id="file"
            placeholder="input Foto Profil"
            className="input-title"
            type="file"
            // accept="image/*"
            // value={this.state.FotoProfil}
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
            <button className="save-btn" onClick={handleSaveProfil}>
              {this.state.textBtn}
            </button>
          </div>
          {/* <progress value={Progress} max="100"/> */}
        </div>
        <hr />
        {profil.length > 0 ? (
          <Fragment>
            {profil.map(profil => {
              console.log(profil.data.downloadURL,'===')
              return (
                <div
                  className="card-content"
                  key={profil.id}
                  onClick={() => updateProfil(profil)}
                >
                  <p className="title">{profil.data.Username}</p>
                  <p className="content">{profil.data.Email}</p>
                  <p className="content">{profil.data.Password}</p>
                  <p className="content">{profil.data.NoHp}</p>
                  <p className="content">{profil.data.NoTelp}</p>
                  {/* <p className="content">{profil.data.downloadURL}</p> */}
                  {/* <p>{profil.data.downloadURL}</p> */}
                  <img src={profil.data.downloadURL || "http://via.placeholder.com/150"} width="150px" height="150px" alt="profil-image"/>
                  <p className="content">{profil.data.Alamat}</p>
                  <p className="content">{profil.data.Role}</p>
                  <div
                    className="delete-btn"
                    onClick={(e) => deleteProfil(e, profil)}
                  >
                    X
                  </div>
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
