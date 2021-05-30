import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import Logo from '../assets/bio_logo.png'; 



export default function Navigation() {
  let navColor = '#ffffff'
  // style={{color: navColor}}
  return (
    <div>
        <Navbar fixed="top" className="color-nav" variant="light" >

            <Navbar.Brand href="home">
              <img width="200px" height="auto" className="img-responsive" src={Logo}  alt="logo" />
            </Navbar.Brand>
            
            <Nav className="me-auto">
              <Nav.Link href="programs" style={{color: navColor}}>Programs</Nav.Link>
              <Nav.Link href="opportunities" style={{color: navColor}}>Volunteer Opportunities</Nav.Link>
              <Nav.Link href="students-parents" style={{color: navColor}}>Students + Parents</Nav.Link>
              <Nav.Link href="about" style={{color: navColor}}>Who we are</Nav.Link>
              <Nav.Link href="contact" style={{color: navColor}}>Contact Us</Nav.Link>
            </Nav>

        </Navbar> 


    </div>
  )
}