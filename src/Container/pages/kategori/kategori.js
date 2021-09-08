import React, { Component } from "react";
import "./kategori.css";

export class kategori extends Component {
  render() {
    return (
      <>
        <div class="d-flex flex-row bd-highlight mb-3">
          <div class="p-2 bd-highlight">
            <h2>Kategori</h2>
            <br/>
            <a className="kategori">ALL</a>
            <a className="kategori">Wedding</a>
            <a className="kategori">Nature</a>
            <a className="kategori">Travel</a>
            <a className="kategori">Family</a>
            <a className="kategori">Filming</a>

          </div>
          <div class="p-2 bd-highlight">Flex item 2</div>
        </div>
      </>
    );
  }
}

export default kategori;
