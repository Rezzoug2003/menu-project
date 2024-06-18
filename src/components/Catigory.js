import React from "react";
import { Button } from "react-bootstrap";
import Roll from "react-reveal/Roll";

export const Catigory = ({ filterbycatigory, allcat }) => {
  const onclickcatigory = (cat) => {
    filterbycatigory(cat);
  }
  return (
    <div className="d-flex justify-content-center pt-3 mb-5 ">
    
      {allcat.map((cat) => {
        return (
          <Roll>
            <button
              key={cat}
              style={{ border: "1px solid #b45b35" }}
              className="btnn mx-2 py-1 px-3 "
              onClick={() => {
                onclickcatigory(cat);
              }}
            >
              {cat}
            </button>
          </Roll>
        );
      })}
    </div>
  );
};
