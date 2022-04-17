import React from "react";
import './Header.css';
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../image/logo.png";

const Header = () => {
  return (
    <div className="p-1 m-1 cnav1 ">
      <nav>
        <div>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">
                <img
                  alt=""
                  src={logo}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{" "}
                OnShortS
              </Navbar.Brand>
            </Container>
            <div className="cnav m-3 "> 
              <Link to="home">home</Link>
              <Link to="About">About</Link>
              <Link to="Blogs">Blogs</Link>
              <Link to="Login">home</Link>
            </div>
          </Navbar>
        </div>
        {/* <div>
          <Link to="home">home</Link>
        </div> */}
      </nav>
    </div>
  );
};

export default Header;
