import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react';
import './Nav.css'
import logo from '../../media/images/Logo.svg'


export const NavBar = () => {
  const [show, setShow] = useState(false);
  const handleNavClick = () => {
    setShow(!show);
  };

  return (
    <Navbar bg="dark" variant='dark shadow' expand="lg">
      <Container>
        <Navbar.Brand><Link to='/'><Image src={logo} roundedCircle /></Link></Navbar.Brand>
        <button
          aria-controls="basic-navbar-nav"
          className="navbar-toggler"
          type="button"
          onClick={() => setShow(!show)}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div

          className={`navbar-collapse collapse  ${show ? "show" : ""}`}
          id="basic-navbar-nav">
          <Nav className="m-auto">
            <li key={"1"} onClick={handleNavClick}> <NavLink to='/services'>services</NavLink></li>
            <li key={"2"} onClick={handleNavClick}> <a href='tel:89488661183'>Contact</a></li>
            <li key={"3"} onClick={handleNavClick}> <NavLink to='/about'>About</NavLink></li>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
}

