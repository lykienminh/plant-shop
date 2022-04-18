import React, { useState, useEffect } from 'react';
import { 
    Navbar,
    Nav, 
    Container, 
    Image, 
    NavDropdown, 
    Button 
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/Navigation.css';

const Navigation = () => {

  return (
    <>
        <Navbar collapseOnSelect expand="md" bg="light" variant="light" sticky="top">
            <Container>
                <Navbar.Brand href="/">
                    <Image src={require('../../images/logo-plant.jpeg')} alt='logo' className="logo"/>
                </Navbar.Brand>
                <Nav>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/product">Product</Nav.Link>
                    <Nav.Link href="/contact-us">Services</Nav.Link>
                    <Nav.Link href="/contact-us">About Us</Nav.Link>
                    <Nav.Link href="/contact-us">Contact</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="/login">
                        <Button className="btn-login" variant="outline-success">Log In</Button>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </>
  );
};

export default Navigation;