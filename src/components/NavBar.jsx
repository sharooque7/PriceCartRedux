import React, { useState } from "react";
import style from "./NavBar.module.css";
import { Navbar, Button, Form, NavDropdown, Nav } from "react-bootstrap/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import CartModal from "../components/Modal";

const Buttons = (props) => {
  return (
    <Button variant="outline-dark" onClick={props.handleShow}>
      <span className="mx-1">
        <FontAwesomeIcon icon={faShoppingCart} />
      </span>
      <span className="mx-1">Cart</span>{" "}
      <span className={`mx-1 ${style.round}`}>7</span>
    </Button>
  );
};

const NavBar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar className="px-5" bg="light" expand="lg">
      <Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About</Nav.Link>
          <NavDropdown title="Shop" id="basic-nav-dropdown">
            <NavDropdown.Item href="#AllProduct">All Product</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.2">
              Popular Items
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">New Arrivals</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <Buttons handleShow={handleShow} />

          <CartModal
            show={show}
            handleClose={handleClose}
            handleShow={handleShow}
          />
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavBar;
