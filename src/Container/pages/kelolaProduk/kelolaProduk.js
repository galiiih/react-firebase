import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import {
  getDataProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../../../config/redux/actions/kelolaProdukAction";
import "./kelolaProduk.scss";

const reduxState = (state) => ({
  dataUser: state.user,
  produk: state.produk,
  downloadURL: state.downloadURL,
});

const reduxDispatch = (dispatch) => ({
  saveKategori: (data) => dispatch(addProduct(data)),
  getDataProduct: (data) => dispatch(getDataProduct(data)),
  updateKategori: (data) => dispatch(updateProduct(data)),
  deleteProduct: (data) => dispatch(deleteProduct(data)),
});

class kelolaProduk extends Component {
  state = {
    NamaProduk: "",
    Katalog: ["Cetak", "Kategori", "Promo", "Sewa"],
    selected_katalog: "",
    selected_kategori: "",
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
        FotoProduk: e.target.files[0],
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
      selected_katalog,
      selected_kategori
    } = this.state;

    const {
      saveKategori,
      updateKategori,
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

    //action click nya simpen
    if (textBtn === "SIMPAN") {
      //ini kalo katalog yang di select/pilih sesuai dengan katalog yg tersedia dan kategori nya sesuai yang tersedia
      if (Katalog.includes(selected_katalog) && Kategori.includes(selected_kategori)) {
        const nData = {
          ...data,
          selected_kategori: selected_kategori,
          selected_katalog: selected_katalog,
          downloadURL: this.props.downloadURL,
        };
        saveKategori(nData);
      } else {
        // ini kalo katalognya diluar dari yang ditentuin 
        alert('Not in The List')
      }

      // INI KALO ACTION CLICKNYA UPDATE
    } else if (textBtn === "UPDATE") {
      //ini kalo katalog yang di select/pilih sesuai dengan katalog yg tersedia dan kategori nya sesuai yang tersedia
      if (Katalog.includes(selected_katalog) && Kategori.includes(selected_kategori)) {
        data.produkId = produkId;
        const nData = {
          ...data,
          selected_kategori: selected_kategori,
          selected_katalog: selected_katalog,
          downloadURL: this.props.downloadURL,
        };
        updateKategori(nData);
      } else {
        // ini kalo katalognya diluar dari yang ditentuin 
        alert('Not in The List')
      }
    }
    this.setState({
      NamaProduk: "",
      selected_katalog: "",
      selected_kategori: "",
      Deskripsi: "",
      Inkluisi: "",
      Harga: "",
      FotoProduk: "",
      textBtn: "SIMPAN",
    });
  };

  updatedKategori = (produk) => {
    this.setState({
      NamaProduk: produk.data.NamaProduk,
      selected_katalog: produk.data.Katalog,
      selected_kategori: produk.data.Kategori,
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
      selected_katalog: "",
      selected_kategori: "",
      Deskripsi: "",
      Inkluisi: "",
      FotoProduk: "",
      Harga: "",
      textBtn: "SIMPAN",
    });
  };

  deletedProduk = (e, produk) => {
    e.stopPropagation(); //fungsi untuk stop function dari parent, hanya function dari childnya saja
    const { deleteProduct } = this.props;
    const dataUser = JSON.parse(localStorage.getItem("dataUser"));
    const data = {
      userId: dataUser.uid,
      produkId: produk.id,
      selected_kategori: produk.data.Kategori,
      selected_katalog: produk.data.Katalog,
    };
    alert("yakin mau hapus?");
    deleteProduct(data);
    this.props.getDataProduct(data);

  };

  handleSearch() {
    const dataUser = JSON.parse(localStorage.getItem("dataUser"));
    const data = {
      userId: dataUser.uid,
      selected_kategori: this.state.search_kategori,
      selected_katalog: this.state.search_katalog
    };

    this.props.getDataProduct(data);
  }
  render() {
    const { produk } = this.props;
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
          <select
            className="form-select"
            id="katalog"
            value={this.state.selected_katalog}
            onChange={(e) => this.handleChange(e, "selected_katalog")}
          >
            <option selected>Pilih katalog</option>
            <option value="Cetak">Cetak</option>
            <option value="Kategori">Kategori</option>
            <option value="Promo">Promo</option>
            <option value="Sewa">Sewa</option>
          </select>
          <select
            className="form-select"
            id="kategori"
            value={this.state.selected_kategori}
            onChange={(e) => this.handleChange(e, "selected_kategori")}
          >
            <option selected>Pilih Kategori</option>
            <option value="Birthday">Birthday</option>
            <option value="Family">Family</option>
            <option value="Filming">Filming</option>
            <option value="Graduation">Graduation</option>
            <option value="Nature">Nature</option>
            <option value="Wedding">Wedding</option>
            <option value="Travel">Travel</option>
            <option value="Pas Foto">Pas Foto</option>
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
            // value={this.state.FotoProduk}
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

        <div>
          <select
            className="form-select"
            id="katalog"
            value={this.state.search_katalog}
            onChange={(e) => this.handleChange(e, "search_katalog")}
          >
            <option selected>Search Catalog</option>
            <option value="Cetak">Cetak</option>
            <option value="Kategori">Kategori</option>
            <option value="Promo">Promo</option>
            <option value="Sewa">Sewa</option>
          </select>
          <select
            className="form-select"
            id="kategori"
            value={this.state.search_kategori}
            onChange={(e) => this.handleChange(e, "search_kategori")}
          >
            <option selected>Search Category</option>
            <option value="Birthday">Birthday</option>
            <option value="Family">Family</option>
            <option value="Filming">Filming</option>
            <option value="Graduation">Graduation</option>
            <option value="Nature">Nature</option>
            <option value="Wedding">Wedding</option>
            <option value="Travel">Travel</option>
            <option value="Pas Foto">Pas Foto</option>
          </select>

          <button className="save-btn" onClick={this.handleSearch.bind(this)}>
            Search
          </button>
        </div>

        {
          produk.length > 0 ? (
            <Fragment>
              {produk.map((produk) => {
                return (
                  <div
                    className="card-content"
                    key={produk.id}
                    onClick={() => this.updatedKategori(produk)}
                  >
                    <p className="title">{produk.data.NamaProduk}</p>
                    <p className="content">{produk.data.Katalog}</p>
                    <p className="content">{produk.data.Kategori}</p>
                    <p className="content">{produk.data.Deskripsi}</p>
                    <p className="content">{produk.data.Inkluisi}</p>
                    <p className="content">{produk.data.Harga}</p>
                    {/* <p>{profil.data.downloadURL}</p> */}
                    <img
                      src={
                        produk.data.downloadURL ||
                        "http://via.placeholder.com/150"
                      }
                      width="150px"
                      height="150px"
                      alt="profil-image"
                    />
                    <div
                      className="delete-btn"
                      onClick={(e) => this.deletedProduk(e, produk)}
                    >
                      X
                    </div>
                  </div>
                );
              })}
            </Fragment>
          ) : null
        }
      </div>
    );
  }
}

export default connect(reduxState, reduxDispatch)(kelolaProduk);
