import React, { Component } from "react";

class kelolaProduk extends Component {
  render() {
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
            <img src={image} className="img-thumbnail" alt="" />
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
            <button className="save-btn" onClick={handleSaveProfil}>
              {this.state.textBtn}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default kelolaProduk;
