import React from 'react';
import { Navbar, Nav, Container, Image } from 'react-bootstrap'
import Logo from '../assets/logos/bio_logo.png'; 



export default function Navigation() {
  let navColor = '#ffffff'

  return (
    <div className="">


        <Navbar collapseOnSelect expand="lg" className="color-nav" variant="light">
          <Container>
            <Navbar.Brand href="home">
                <Image fluid width="200px" height="auto" className="img-responsive" src={Logo} alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="programs" style={{color: navColor}}>Programs</Nav.Link>
                <Nav.Link href="opportunities" style={{color: navColor}}>Opportunities With Us</Nav.Link>
                <Nav.Link href="students-parents" style={{color: navColor}}>Students & Parents</Nav.Link>
                <Nav.Link href="about" style={{color: navColor}}>Who We Are</Nav.Link>
                <Nav.Link href="contact" style={{color: navColor}}>Contact Us</Nav.Link>
                {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
              <Nav>
                <Nav.Link href="login">Log In</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

    </div>
  )
}