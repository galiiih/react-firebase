import React, { Component } from "react";

export class card extends Component {
  render() {
    return (
      <div class="card" style="width: 18rem;">
        <img
          src="http://via.placeholder.com/150"
          class="card-img-top"
          width="150px"
          height="150px"
          alt="profil-image"
        />
        {/* <img src={profil.data.downloadURL || "http://via.placeholder.com/150"} class="card-img-top" alt="..." /> */}
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Detil
          </a>
        </div>
      </div>
    );
  }
}

export default card;
