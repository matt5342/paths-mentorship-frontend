import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navbar, Nav, Container, Image, NavDropdown, Button } from 'react-bootstrap'
import bio_logo4 from '../assets/logos/bio_logo4.png'; 
import GoFundMe_logo from '/Users/mattsewell/Development/pathsmentorship/frontend/paths-mentorship/src/assets/logos/GoFundMe_logo.svg'
import { useDispatch } from 'react-redux';
import { userActions } from '../_actions/user.actions';

export default function Navigation() {

  const currentUser = useSelector((state) => state.authentication.user)
  const loggedIn = useSelector((state) => state.authentication.loggedIn)
  const dispatch = useDispatch();

  const logout = () => { 
      dispatch(userActions.logout()); 
  }
  return (
    <div>
        <Navbar fixed="top" collapseOnSelect  expand="lg" className="color-nav" variant="light">
          <Container className="nav-container">
            <Navbar.Brand href="home">
                <Image fluid width="125px" height="auto" className="img-responsive" src={bio_logo4} alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="programs" className="nav-link">Programs</Nav.Link>
                <Nav.Link href="opportunities" className="nav-link">Opportunities</Nav.Link>
                <Nav.Link href="impact" className="nav-link">Impact</Nav.Link>
                <Nav.Link href="students-parents" className="nav-link">Students & Parents</Nav.Link>
                <Nav.Link href="about" className="nav-link">Who We Are</Nav.Link>
                <Nav.Link href="contact" className="nav-link">Contact Us</Nav.Link>
                {loggedIn && currentUser.roles.includes("ROLE_ADMIN") ? 
                  <Nav.Link href="admin" className="nav-link">Admin Panel</Nav.Link>
                  : null
                }

              </Nav>
              <Nav className="ml-auto">
                {
                  currentUser  ? 
                  <Nav>
                    <Nav.Link href="profile" className="nav-link">{currentUser.username}</Nav.Link>
                    <Nav.Link onClick={logout} className="nav-link">Logout</Nav.Link>
                   </Nav>
                  : <Nav.Link href="login" className="nav-link">Log In</Nav.Link>
                }
              </Nav>
              <Nav className="ml-auto">
                <Button href="https://www.gofundme.com/f/paths-mentorship?utm_source=widget&utm_medium=referral&utm_campaign=p_cp+share-sheet" 
                        variant="warning" style={{'fontSize': '15px'}}>
                        <Image fluid width="60px" 
                          height="auto" 
                          className="img-responsive mx-auto" 
                          src={GoFundMe_logo}  alt="donate"/><br></br>
                          Donate Now
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

    </div>
  )
}
