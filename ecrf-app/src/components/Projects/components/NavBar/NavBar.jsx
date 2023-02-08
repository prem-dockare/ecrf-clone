import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell } from "@fortawesome/free-solid-svg-icons";
import "./components/style.css";
const NavBar = () => {
  return (
    <Navbar className="navBar">
      <Container className="container text-white">
        <Navbar.Brand
          href="#home"
          className="text-white  divLeft d-flex  justify-content-between align-items-center"
        >
          <FontAwesomeIcon className="barIcon" icon={faBars} />
          <p className="orbit mZero">ORBIT</p>
        </Navbar.Brand>
        <p className="textMyProjects m-0">My Projects</p>
        <div className="divRight d-flex justify-content-between align-items-center">
          <div>
            <FontAwesomeIcon className="bellIcon" icon={faBell} />
            {/* <img src="" alt="" /> */}
          </div>
          <div className="d-flex align-items-center justify-content-center tText rounded-circle">
            T
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
