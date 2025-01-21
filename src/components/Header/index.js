import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './header.css'; 

const Header = () => {
    return (
        <Navbar className="custom-navbar" expand="lg">
            <Navbar.Brand as={Link} to="/">SE Odontología</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                    <Nav.Link as={Link} to="/services">Servicios</Nav.Link>
                    <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export { Header };

