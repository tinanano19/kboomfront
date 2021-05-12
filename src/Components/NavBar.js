import React, {useState, useEffect} from 'react';
import Navbar from 'react-bootstrap/Navbar'

const URI = process.env.REACT_APP_URI;

const NavBar = () => {


    return (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">K-Boom</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                Hola, <a href="#login">Santiago García</a>
            </Navbar.Text>
        </Navbar.Collapse>
    </Navbar>

)};

export default NavBar;