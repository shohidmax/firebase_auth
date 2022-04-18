import React from "react";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../image/logo.png";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  console.log(user);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div className="p-1 m-1 ">
      <nav>
        <div>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="../Home">
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
            <Container>
              
              <Nav className="me-auto">
              
              </Nav>
            </Container>
            <div className="cnav m-3 ">
            <Link to="home">home</Link>
              <Link to="Blogs">Blogs</Link>
              <Link to="Checkout">Checkout</Link>
              <Link to="About">About</Link>
              {user ? (
                <button className="btn btn-link" onClick={handleSignOut}>Log out</button>
              ) : (
                <Link  to="/Login">Login</Link>
              )}
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
