import React, { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { logout } from "../../services/userService";
import "./HeaderNav.css";

export default function HeaderNav(props) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <Navbar
      bg="light"
      variant="light"
      expand="lg"
      expanded={isNavOpen}
      dir="rtl"
    >
      <Container className="header">
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={handleNavToggle}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto ">
            {props.user ? (
              <>
                <Link to="/profile" className="nav-link">
                  <img
                    src={props.user.imgUrl}
                    alt="Profile"
                    className="user-profile-img"
                  />
                </Link>
                <Button variant="link" onClick={logout} className="nav-link">
                  התנתק
                </Button>
              </>
            ) : (
              <>
                <Link to="/login" className="nav-link">
                  התחבר
                </Link>
                <img
                  src="https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"
                  alt="User Profile Default"
                  className="user-profile-img"
                />
              </>
            )}
          </Nav>
          <Nav className="ml-auto nav-links">
            <Link to="/About">אודות המערכת</Link>
            <Link to="/Pricing">מסלולי הצטרפות</Link>
            <Link to="/ContactUs">צור קשר</Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand>
          <Link to="/">
            <img
              src={logo}
              height="30"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
