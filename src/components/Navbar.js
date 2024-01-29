import React, { useState,Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/Screenshot_2024-01-29_162222-removebg-preview.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-scroll";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiFillAppstore,
  AiOutlineSafetyCertificate
} from "react-icons/ai";
import Header from "./Ab";
import { CgFileDocument } from "react-icons/cg";

function NavBar(){
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} activeClass="active"  to="bareme" spy={true} smooth={true} duration={800} onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>
             
            

            <Nav.Item>
              <Nav.Link
                as={Link}
                activeClass="active" to="kyasikha" spy={true} smooth={true} duration={800}
                onClick={() => updateExpanded(false)}
              >
                <AiFillAppstore style={{ marginBottom: "2px" }} /> Skills
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                activeClass="active" to="kyakiya" spy={true} smooth={true} duration={800}
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                activeClass="active" to="kyajeeta" spy={true} smooth={true} duration={800}
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineSafetyCertificate
                  style={{ marginBottom: "2px" }}
                />{" "}
               Certification
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link href="https://drive.google.com/file/d/1aJJRH6I2eCg6XEb89l7GzYklKzGkHaPK/view?usp=drivesdk" target="_blank">
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
                </Nav.Link>
            </Nav.Item>


            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
