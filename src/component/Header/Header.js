import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../image/logo.png";

const Header = () => {
  return (
    <div>
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
            <div>
              <Link to="home">home</Link>
              <Link to="About">About</Link>
              <Link to="Blogs">Blogs</Link>
              <Link to="home">home</Link>
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
