import React, { useState } from "react";
import firebase from "./../config/firebase/firebase";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Container,
} from "reactstrap";

const handleLogout = (e) => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      // Sign-out successful.
      localStorage.removeItem("dataUser");
      alert("anda telah keluar");
    })
    .catch((error) => {
      // An error happened.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Container>
          <NavbarBrand href="/">Onelens</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
            </Nav>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/login">Login</NavLink>
              </NavItem>
            </Nav>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/register">Register</NavLink>
              </NavItem>
            </Nav>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/kelolaproduk">Kelola Produk</NavLink>
              </NavItem>
            </Nav>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/dashboard">Dashboard</NavLink>
              </NavItem>
            </Nav>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/login" onClick={handleLogout}>Logout</NavLink>
              </NavItem>
            </Nav>
            <NavbarText>Profil</NavbarText>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
