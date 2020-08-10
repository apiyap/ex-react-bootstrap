import React from 'react';
import {
    Nav,
    Navbar,
    Image,
    Form,
    FormControl,
    InputGroup,
    Button,
    NavDropdown,
    Container,

} from 'react-bootstrap';

import logo from './logo.svg';

export default function TopNav (){
    return(
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Navbar.Brand href="/">
            <img
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
                Home
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </>
    )
}