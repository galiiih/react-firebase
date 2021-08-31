import React, { Component } from "react";
import "./kelolaProduk.scss";

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
    FotoProduk: null,
    donwloadURL: null,
    textBtn: "SIMPAN",
    profilId: "",
  };

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
      // profilId,
    } = this.state;

    const { textBtn } = this.state;
    // const dataUser = JSON.parse(localStorage.getItem("dataUser"));

    const data = {
      NamaProduk: NamaProduk,
      Katalog: Katalog,
      Kategori: Kategori,
      Deskripsi: Deskripsi,
      Inkluisi: Inkluisi,
      Harga: Harga,
      FotoProduk: FotoProduk,
      // produkId: produkId,
    };

    if (textBtn === "SIMPAN") {
      // saveProduk(data);
      // this.props.getProfil(dataUser.uid);
    } else {
      // data.produkId = produkId;
      // updateProduk(data);
      // this.props.getProfil(dataUser.uid);
    }

    console.log(data);
  };

  updateProduk = (produk) => {
    console.log(produk);
    this.setState({
      NamaProduk: produk.data.NamaProduk,
      Katalog: produk.data.Katalog,
      Kategori: produk.data.Kategori,
      Deskripsi: produk.data.Deskripsi,
      Inkluisi: produk.data.Inkluisi,
      Harga: produk.data.Harga,
      // FotoProduk: produk.data.FotoProduk,
      textBtn: "UPDATE",
      produkId: produk.id,
    });
  };

  cancelUpdate = (produk) => {
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
    const { cancelUpdate } = this;
    return (
      <div className="container">
        <div className="input-form">
          <input
            id="namaProduk"
            placeholder="masukan nama produk"
            className="input-title"
            // value={this.state.Username}
            // onChange={(e) => this.handleChange(e, "Username")}
          />
          <select className="form-select" id="katalog">
            <option selected>Pilih katalog</option>
            <option value="1">Cetak</option>
            <option value="2">Kategori</option>
            <option value="3">Promo</option>
            <option value="4">Sewa</option>
          </select>
          <select className="form-select" id="kategori">
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
            // value={this.state.Alamat}
            // onChange={(e) => this.handleChange(e, "Alamat")}
          />
          <textarea
            id="inklusi"
            placeholder="Masukan Inklusi"
            className="input-content"
            // value={this.state.Alamat}
            // onChange={(e) => this.handleChange(e, "Alamat")}
          />
          <input
            id="harga"
            placeholder="Masukan Harga"
            className="input-title"
            // value={this.state.FotoProfil}
            // onChange={(e) => this.handleChange(e, "FotoProfil")}
          />
          <div className="d-flex justify-content-center align-items-center">
            <img src="" className="img-thumbnail" alt="" />
          </div>
          <input
            id="FotoProduk"
            placeholder="input Foto Produk"
            className="input-title"
            type="file"
            accept="image/*"
            // value={this.state.FotoProfil}
            // onChange={(e) => this.handleChange(e, "FotoProfil")}
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
        {/* <div
          className="card-content"
          // key={profil.id}
          // onClick={() => updateProfil(profil)}
        >
          <p className="title">{produk.data.NamaProduk}</p>
          <p className="content">{produk.data.Email}</p>
          <p className="content">{produk.data.Password}</p>
          <p className="content">{produk.data.NoHp}</p>
          <p className="content">{produk.data.NoTelp}</p>
          <p className="content">{produk.data.Fotoproduk}</p>
          <p className="content">{produk.data.Role}</p>
          <div className="delete-btn" onClick={(e) => deleteproduk(e, produk)}>
            X
          </div>
        </div> */}
      </div>
    );
  }
}

export default kelolaProduk;
