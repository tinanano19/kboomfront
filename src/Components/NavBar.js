import React, {useState, useEffect} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import logoM from './LogoV2.png'
import './NavBar.css'

const URI = process.env.REACT_APP_URI;

const NavBar = () => {


    return (
    <Navbar className="o-nav" expand="lg">
        <Navbar.Brand href="#home">
        <img
        src={logoM}
        className="o-logo"
        alt="logo K-boom"
      />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                Hola, <a href="#login">Santiago García</a>
            </Navbar.Text>
        </Navbar.Collapse>
    </Navbar>

)};

export default NavBar;