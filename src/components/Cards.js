import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";

export const Cards = ({ dataitems }) => {
  console.log(dataitems)
  return (
    <div>
      <Row >
        <Zoom>
          {dataitems.length >= 1 ? (
            dataitems.map((item) => {
              return (
                
                <Col sm="12" key={item.id}>
                  <Card
                    className=" mb-2 d-flex flex-row "
                   
                  >
                    <div className="img-item ">
                      <Card.Img
                        className="img-item"
                        variant="top"
                        style={{ height: "180px" }}
                        src={item.imgUrl}
                      />
                    </div>
                    <div className="card-body  ">
                      <Card.Title className="d-flex justify-content-between">
                        <div className="item-title">{item.title}</div>
                        <div className="item-price">{item.price}</div>
                      </Card.Title>
                      <Card.Text>
                        <div className="item-description">
                          {item.description}
                        </div>
                      </Card.Text>
                    </div>
                  </Card>
                </Col>
               
              );
            })
          ) : (
            <h1>not fond</h1>
          )}
        </Zoom>
      </Row>
    </div>
  );
};
