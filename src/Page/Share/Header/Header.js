import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import logo from "../../../images/logo2.png";
import "./Header.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
const Header = () => {
  const [user]=useAuthState(auth)
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} height="30px" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link>
              <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
            </Nav.Link>
            {
              user ? (
                <button onClick={() => signOut(auth)}>Logout</button>
            ) :
              <Nav.Link className="btn-button" as={Link} to="/login">
              Login
            </Nav.Link>}
            <li>{user?.email}</li>
            <Nav.Link
              className="btn-button"
              eventKey={2}
              as={Link}
              to="/singup"
            >
              SingUp
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
