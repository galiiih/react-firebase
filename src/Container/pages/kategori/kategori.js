import React, { Component } from "react";
import "./kategori.css";

export class kategori extends Component {
  render() {
    return (
      <>
        <div class="d-flex flex-row bd-highlight mb-3">
          <div class="p-5 bd-highlight">
            <h2>Kategori</h2>
            <br />
            <a href="" className="kategori">ALL</a> <br />
            <a href="" className="kategori">Wedding</a> <br />
            <a href="" className="kategori">Nature</a> <br />
            <a href="" className="kategori">Travel</a> <br />
            <a href="" className="kategori">Family</a> <br />
            <a href="" className="kategori">Filming</a>
          </div>
          <div class="p-5 bd-highlight ">
            <div class="row">
              <div class="col-sm-5">
                <div class="card">
                  <img
                    src="http://via.placeholder.com/150"
                    class="card-img-top"
                    width="150px"
                    height="150px"
                    alt="profil-image"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Foto Marga Keluarga</h5>
                    <p class="card-text">
                      Lorem ipsum
                    </p>
                    <a href="#" class="btn btn-primary btn-detil">
                      Detil
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-sm-5">
                <div class="card">
                  <img
                    src="http://via.placeholder.com/150"
                    class="card-img-top"
                    width="150px"
                    height="150px"
                    alt="profil-image"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Anniversary Wedding</h5>
                    <p class="card-text">
                      Lorem ipsum
                    </p>
                    <a href="#" class="btn btn-primary btn-detil">
                      Detil
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-sm-5">
                <div class="card">
                  <img
                    src="http://via.placeholder.com/150"
                    class="card-img-top"
                    width="150px"
                    height="150px"
                    alt="profil-image"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Foto Nikah</h5>
                    <p class="card-text">
                    Lorem ipsum tele
                    </p>
                    <a href="#" class="btn btn-primary btn-detil">
                      Detil
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default kategori;
