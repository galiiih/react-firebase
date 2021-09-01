import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import {
  addProdukKategori,
  addProdukPromo,
  addProdukSewa,
  getDataKategoriFromAPI,
  getDataPromoFromAPI,
  getDataSewaFromAPI,
  updateDataKategoriAPI,
  updateDataPromoAPI,
  updateDataSewaAPI,
  deleteDataKategoriAPI,
  deleteDataPromoAPI,
  deleteDataSewaAPI,
} from "../../../config/redux/actions/kelolaProdukAction";
import "./kelolaProduk.scss";

const reduxState = (state) => ({
  dataUser: state.user,
  produk: state.produk,
  downloadURL: state.downloadURL,
});

const reduxDispatch = (dispatch) => ({
  saveKategori: (data) => dispatch(addProdukKategori(data)),
  savePromo: (data) => dispatch(addProdukPromo(data)),
  saveSewa: (data) => dispatch(addProdukSewa(data)),
  getKategori: (data) => dispatch(getDataKategoriFromAPI(data)),
  getPromo: (data) => dispatch(getDataPromoFromAPI(data)),
  getSewa: (data) => dispatch(getDataSewaFromAPI(data)),
  updateKategori: (data) => dispatch(updateDataKategoriAPI(data)),
  updatePromo: (data) => dispatch(updateDataPromoAPI(data)),
  updateSewa: (data) => dispatch(updateDataSewaAPI(data)),
  deleteDataKategori: (data) => dispatch(deleteDataKategoriAPI(data)),
  deleteDataPromo: (data) => dispatch(deleteDataPromoAPI(data)),
  deleteDataSewa: (data) => dispatch(deleteDataSewaAPI(data)),
});

class kelolaProduk extends Component {
  state = {
    NamaProduk: "",
    Katalog: ["Cetak", "Kategori", "Promo", "Sewa"],
    Kategori: [
      "Birthday",
      "Family",
      "Filming",
      "Graduation",
      "Nature",
      "Wedding",
      "Travel",
      "Pas Foto",
    ],
    Deskripsi: "",
    Inkluisi: "",
    Harga: "",
    FotoProduk: "",
    textBtn: "SIMPAN",
    produkId: "",
  };

  componentDidMount() {
    const dataUser = JSON.parse(localStorage.getItem("dataUser"));
    // this.props.getProfil(dataUser.uid);
  }

  handleChange = (e, type) => {
    if (type === "FotoProduk") {
      this.setState({
        FotoProfil: e.target.files[0],
      });
    } else {
      this.setState({
        [type]: e.target.value,
      });
    }
  };

  handleSaveProduk = () => {
    const {
      NamaProduk,
      Katalog,
      Kategori,
      Deskripsi,
      Inkluisi,
      Harga,
      FotoProduk,
      produkId,
      textBtn,
    } = this.state;

    const {
      saveKategori,
      savePromo,
      saveSewa,
      getKategori,
      getPromo,
      getSewa,
      updateKategori,
      updatePromo,
      updateSewa,
      deleteDataKategori,
      deleteDataPromo,
      deleteDataSewa,
    } = this.props;
    const dataUser = JSON.parse(localStorage.getItem("dataUser"));

    const data = {
      NamaProduk: NamaProduk,
      Katalog: Katalog,
      Kategori: Kategori,
      Deskripsi: Deskripsi,
      Inkluisi: Inkluisi,
      Harga: Harga,
      FotoProduk: FotoProduk,
      userId: dataUser.uid,
    };

    if (textBtn === "SIMPAN") {
      if (
        (Kategori === "Birthday",
        "Family",
        "Filming",
        "Graduation",
        "Nature",
        "Wedding",
        "Travel",
        "Pas Foto")
      ) {
        console.log("simpen");
        const nData = {
          ...data,
          downloadURL: this.props.downloadURL,
        };
        saveKategori(nData);
      } else if (Katalog === "Promo") {
        console.log("simpen");
        const nData = {
          ...data,
          downloadURL: this.props.downloadURL,
        };
        savePromo(nData);
      } else if (Katalog === "Sewa") {
        console.log("simpen");
        const nData = {
          ...data,
          downloadURL: this.props.downloadURL,
        };
        saveSewa(nData);
      }
    } else {
      if (
        (Kategori === "Birthday",
        "Family",
        "Filming",
        "Graduation",
        "Nature",
        "Wedding",
        "Travel",
        "Pas Foto")
      ) {
        console.log("update");
        data.produkId = produkId;
        const nData = {
          ...data,
          downloadURL: this.props.downloadURL,
        };
        updateKategori(nData);
      } else if (Katalog === "Promo") {
        console.log("update");
        data.produkId = produkId;
        const nData = {
          ...data,
          downloadURL: this.props.downloadURL,
        };
        updatePromo(nData);
      } else if (Katalog === "Sewa") {
        console.log("update");
        data.produkId = produkId;
        const nData = {
          ...data,
          downloadURL: this.props.downloadURL,
        };
        updateSewa(nData);
      }
    }
    console.log(data);
  };

  updateKategori = (produk) => {
    console.log(produk);
    this.setState({
      NamaProduk: produk.data.NamaProduk,
      Katalog: produk.data.Katalog,
      Kategori: produk.data.Kategori,
      Deskripsi: produk.data.Deskripsi,
      Inkluisi: produk.data.Inkluisi,
      Harga: produk.data.Harga,
      FotoProduk: produk.data.FotoProduk,
      textBtn: "UPDATE",
      produkId: produk.id,
    });
  };
  updatePromo = (produk) => {
    console.log(produk);
    this.setState({
      NamaProduk: produk.data.NamaProduk,
      Katalog: produk.data.Katalog,
      Kategori: produk.data.Kategori,
      Deskripsi: produk.data.Deskripsi,
      Inkluisi: produk.data.Inkluisi,
      Harga: produk.data.Harga,
      FotoProduk: produk.data.FotoProduk,
      textBtn: "UPDATE",
      produkId: produk.id,
    });
  };
  updateSewa = (produk) => {
    console.log(produk);
    this.setState({
      NamaProduk: produk.data.NamaProduk,
      Katalog: produk.data.Katalog,
      Kategori: produk.data.Kategori,
      Deskripsi: produk.data.Deskripsi,
      Inkluisi: produk.data.Inkluisi,
      Harga: produk.data.Harga,
      FotoProduk: produk.data.FotoProduk,
      textBtn: "UPDATE",
      produkId: produk.id,
    });
  };

  cancelUpdate = (produk) => {
    this.setState({
      NamaProduk: "",
      Katalog: "",
      Kategori: "",
      Deskripsi: "",
      Inkluisi: "",
      FotoProduk: "",
      Harga: "",
      textBtn: "SIMPAN",
    });
  };

  deleteProduk = (e, produk) => {
    e.stopPropagation(); //fungsi untuk stop function dari parent, hanya function dari childnya saja
    const { deleteProduk } = this.props;
    const dataUser = JSON.parse(localStorage.getItem("dataUser"));
    const data = {
      userId: dataUser.uid,
      produkId: produk.id,
    };
    alert("yakin mau hapus?");
    deleteProduk(data);
  };
  render() {
    const {produk} = this.props;
    const { cancelUpdate } = this;
    return (
      <div className="container">
        <div className="input-form">
          <input
            id="namaProduk"
            placeholder="masukan nama produk"
            className="input-title"
            value={this.state.NamaProduk}
            onChange={(e) => this.handleChange(e, "NamaProduk")}
          />
          <select className="form-select" id="katalog" value={this.state.Katalog} onChange={(e) => this.handleChange(e, "Katalog")}>
            <option selected>Pilih katalog</option>
            <option value="1">Cetak</option>
            <option value="2">Kategori</option>
            <option value="3">Promo</option>
            <option value="4">Sewa</option>
          </select>
          <select className="form-select" id="kategori" value={this.state.Kategori} onChange={(e) => this.handleChange(e, "Kategori")}>
            <option selected>Pilih Kategori</option>
            <option value="1">Birthday</option>
            <option value="2">Family</option>
            <option value="3">Filming</option>
            <option value="4">Graduation</option>
            <option value="5">Nature</option>
            <option value="6">Wedding</option>
            <option value="7">Travel</option>
            <option value="8">Pas Foto</option>
          </select>
          <textarea
            id="deskripsi"
            placeholder="Masukan Deskripsi"
            className="input-content"
            value={this.state.Deskripsi}
            onChange={(e) => this.handleChange(e, "Deskripsi")}
          />
          <textarea
            id="inklusi"
            placeholder="Masukan Inklusi"
            className="input-content"
            value={this.state.Inkluisi}
            onChange={(e) => this.handleChange(e, "Inkluisi")}
          />
          <input
            id="harga"
            placeholder="Masukan Harga"
            className="input-title"
            value={this.state.Harga}
            onChange={(e) => this.handleChange(e, "Harga")}
          />
          {/* <div className="d-flex justify-content-center align-items-center">
            <img src="" className="img-thumbnail" alt="" />
          </div> */}
          <input
            id="FotoProduk"
            placeholder="input Foto Produk"
            className="input-title"
            type="file"
            accept="image/*"
            value={this.state.FotoProduk}
            onChange={(e) => this.handleChange(e, "FotoProduk")}
          />
          <div className="action-wrapper">
            {this.state.textBtn === "UPDATE" ? (
              <button className="save-btn cancel" onClick={cancelUpdate}>
                CANCEL
              </button>
            ) : (
              <div />
            )}
            <button className="save-btn" onClick={this.handleSaveProduk}>
              {this.state.textBtn}
            </button>
          </div>
        </div>
        <hr />
        {produk.length > 0 ? (
          <Fragment>
            {produk.map(produk => {
              console.log(produk.data.downloadURL,'===')
              return (
                <div
                  className="card-content"
                  key={produk.id}
                  onClick={() => this.updateKategori(produk)}
                >
                  <p className="title">{produk.data.NamaProduk}</p>
                  <p className="content">{produk.data.Katalog}</p>
                  <p className="content">{produk.data.Kategori}</p>
                  <p className="content">{produk.data.Deskripsi}</p>
                  <p className="content">{produk.data.Inkluisi}</p>
                  <p className="content">{produk.data.Harga}</p>
                  {/* <p>{profil.data.downloadURL}</p> */}
                  <img src={produk.data.downloadURL || "http://via.placeholder.com/150"} width="150px" height="150px" alt="profil-image"/>
                  <div
                    className="delete-btn"
                    onClick={(e) => this.deleteProduk(e, produk)}
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

export default connect(reduxState, reduxDispatch)(kelolaProduk);
