import React, { useState } from "react";
import { Navbar, Container, Form, Nav } from "react-bootstrap";

export const NavbarC = ({ filterbysearsh }) => {
  const [searshvalue, setsearshvalue] = useState("");
  const onSearch = (e) => {
   e.preventDefault()

    filterbysearsh(searshvalue);
    setsearshvalue("");
  };
  return (
    <div>
      <Navbar expand="lg" className="bg-dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">
            <div className="brand-color">Navbar scroll</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <Form.Control
                type="text"
                placeholder="Search"
                className="ms-2"
                aria-label="Search"
                onChange={(e) => {
                  setsearshvalue(e.target.value);
                }}
                value={searshvalue}
              />
            <button onClick={onSearch} className="btn-search">
              بحث
            </button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
