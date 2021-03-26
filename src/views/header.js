import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'

class Header extends React.Component {
  render() {
    return(
      <>
        <Navbar bg="dark" expand="lg" id="header">
          <Navbar.Brand href="#home" style={{ color: 'white' }}>Horned Beasts</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link style={{ color: 'white' }} href="#">Gallery</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default Header;
