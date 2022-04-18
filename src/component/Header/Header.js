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
    <div className="mt-2 p-2 ">
      <div className="container">
        <div className="row navborder">
          <div className="col-md-6 navclass">
            <div className="d-flex roller">
              <div class="container-fluid">
                <a class="navbar-brand" href="../Home">
                  <img
                    src={logo}
                    alt=""
                    width="30"
                    
                    class="d-inline-block align-text-top"
                  />{"  "}
                  OnShortS
                </a>
              </div>
              {/* <img
                alt=""
                href="../Home"
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              <h4>OnShortS</h4> */}
            </div>
          </div>
          <div className="col-md-6">
            <div className="cnav">
              <nav>
                <Link to="home">home</Link>
                <Link to="Blogs">Blogs</Link>
                <Link to="Checkout">Checkout</Link>
                <Link to="About">About</Link>
                {user ? (
                  <button className="btn btn-link" onClick={handleSignOut}>
                    Log out
                  </button>
                ) : (
                  <Link to="/Login">Login</Link>
                )}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
