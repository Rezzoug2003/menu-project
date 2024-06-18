import React from "react";
import { Button } from "react-bootstrap";

export const Cardboots = () => {
  return (
    <div>
      <div class="card  ">
        <div className="row">
          <img className="col-sm-3" src="1.png" alt="" />
          <div class="card-body col-sm-9 ">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Button variant="primary">Go somewhere</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
