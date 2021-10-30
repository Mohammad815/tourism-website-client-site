import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css'


const Header = () => {
    const {user,logout} = useAuth();
    return (
        <Navbar className="navbar" collapseOnSelect expand="lg"   variant="dark">
            <Container>
            <Link className="navLink " to="/home">Global Travel Agency</Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="text-black" id="responsive-navbar-nav">
                <Nav className="ms-auto navbar">
                    <Link className="navLink" to="/home">Home</Link>
                    <Link className="navLink" to="/services">Add Services</Link>
                    <Link className="navLink" to="/about">About</Link>
                    <Link className="navLink" to="/contact">Contact</Link>
                    
                    {
                        user?.email ? 
                        <Button className="btn btn-info" onClick={logout} variant="light">Logout</Button> :
                        <Link className="navLink" to="/login">Login</Link>
                    }
                    <a className="text-black" href="login">{user?.displayName}</a>
                 
                </Nav>
            </Navbar.Collapse>
            </Container>
            
        </Navbar>
    );
};

export default Header;