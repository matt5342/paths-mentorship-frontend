import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, Container, Image, NavDropdown, Button } from 'react-bootstrap'
import temp_logo from '../assets/logos/temp_logo.png'; 
import GoFundMe_logo from '/Users/mattsewell/Development/pathsmentorship/frontend/paths-mentorship/src/assets/logos/GoFundMe_logo.svg'
import { logout } from "../actions/auth";
import { clearMessage } from "../actions/message";
import { history } from "../helpers/history";


export default function Navigation() {
  // const [show, setShow] = useState(false);
  // const showDropdown = (e)=>{
  //     console.log(e);
  //     setShow(!show);
  // }
  // const hideDropdown = e => {
  //     setShow(false);
  // }
  // // const [showMentorBoard, setShowMentorBoard] = useState(false);

  // const [showAdminBoard, setShowAdminBoard] = useState(false);

  // const { user: currentUser } = useSelector((state) => state.auth);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   history.listen((location) => {
  //     dispatch(clearMessage()); // clear message when changing location
  //   });
  // }, [dispatch]);

  // useEffect(() => {
  //   if (currentUser) {
  //     // setShowMenttorBoard(currentUser.roles.includes("ROLE_MENTOR"));
  //     setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
  //   }
  // }, [currentUser]);

  // const logOut = () => {
  //   dispatch(logout());
  // };

  return (
    <div className="">


        <Navbar collapseOnSelect expand="lg" className="color-nav" variant="light">
          <Container className="nav-container">
            <Navbar.Brand href="home">
                <Image fluid width="200px" height="auto" className="img-responsive" src={temp_logo} alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown 
                  title="About Us" 
                  id="collasible-nav-dropdown"

                  >
                  <NavDropdown.Item href="impact">Impact</NavDropdown.Item>
                  <NavDropdown.Item href="about">Who We Are</NavDropdown.Item>
                  <NavDropdown.Item href="contact">Contact Us</NavDropdown.Item>
                </NavDropdown>
                {/* <NavDropdown 
                  title="Programs" 
                  id="collasible-nav-dropdown"

                  >
                  <NavDropdown.Item href="action-potential-initiative">Action Potential Initiative</NavDropdown.Item>
                  <NavDropdown.Item href="about">Who We Are</NavDropdown.Item>
                  <NavDropdown.Item href="news">Contact Us</NavDropdown.Item>
                </NavDropdown> */}
                <Nav.Link href="programs" className="nav-link">Programs</Nav.Link>
                <Nav.Link href="opportunities" className="nav-link">Opportunities</Nav.Link>
                <Nav.Link href="students-parents" className="nav-link">Students & Parents</Nav.Link>
                {/* {showAdminBoard && <Nav.Link href="admin" className="nav-link">Admin Board</Nav.Link>} */}
              </Nav>
              <Nav className="ml-auto">
                <Nav.Link href="login" className="nav-link">Log In/Sign Up</Nav.Link>
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

{/* <NavDropdown 
title="Programs" 
id="collasible-nav-dropdown"
className="dropdown-toggle disabled"
href="programs"
show={show}
onMouseEnter={showDropdown} 
onMouseLeave={hideDropdown}
>
<NavDropdown.Item href="action-potential-initiative">Action Potential Initiative</NavDropdown.Item>

</NavDropdown> */}