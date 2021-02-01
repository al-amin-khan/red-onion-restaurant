import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../images/logo2.png';
import './Header.css'

const Header = () => {
  return (
    <>
      <Navbar bg="white" expand="lg">
        <Navbar.Brand href="#login">
          <img
            src={logo}
            width="150"
            height="38"
            className="d-inline-block align-top"
            alt="Red Onion Restaurant"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="ml-auto">
            <Nav.Link href="#login" className='text-dark'>Login</Nav.Link>
            <Nav.Link href="#signup" className='rounded-pill bg-pink text-white pl-pr'>Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;