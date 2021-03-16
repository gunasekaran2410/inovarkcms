import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
// import './css/style.css';

function Navigation(){
    return(
        <div>
          
            <Navbar bg="light" expand="lg">
            <div className="container">
  <Navbar.Brand href="#home" className="nav_left">  
  
    <Image src="/images/logo.png" width="238" height="80" alt="Logo"/>

  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="pull-right">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">About Us</Nav.Link>
      <Nav.Link href="#link">Products</Nav.Link>
      <Nav.Link href="#link">Services</Nav.Link>
      <Nav.Link href="#link">Contact Us</Nav.Link>

    </Nav>

  </Navbar.Collapse>
  </div>
</Navbar>

            
        </div>
    )
}

export default Navigation