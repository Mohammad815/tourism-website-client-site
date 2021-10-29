import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import './Header.css'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Link className="navLink" to="/home">Global Travel Agency</Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto navbar">
                    <Link className="navLink" to="/home">Home</Link>
                    <Link className="navLink" to="/services">Services</Link>
                    <Link className="navLink" to="/about">About</Link>
                    <Link className="navLink" to="/contact">Contact</Link>
                    <Link className="navLink" to="/login">Login</Link>
                    to: string
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;