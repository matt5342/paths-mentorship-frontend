import React from 'react';
import { Image, Col, Row } from 'react-bootstrap';
import acps_logo from '../assets/logos/acps_logo.png'; 
import pgcps_logo from '../assets//logos/pgcps_logo.png';  
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function NavBottom() {
    const rerouteToLinkedin = () => window.open('https://www.linkedin.com/company/paths-mentorship/about/', "_blank")
    const rerouteToInstagram = () => window.open('https://www.instagram.com/pathsmentorship/', "_blank")
    const rerouteToGithub = () => window.open('https://github.com/matt5342', "_blank")

  return (
    <div>
      <br></br>
        <div className="footer-dark">
          <footer>
              <div className="container text-center">
                  <Row>
                      <Col md={2}/>
                        <Col md={5} className="item text mb-3">
                          <h3>PATHS Mentorship</h3>
                          <p >Here to help YOU achieve your{<br></br>} STEM and Healthcare dreams!</p>
                        </Col>
                      <Col sm={6} md={2} className="item">
                            <div>
                                <h3>Schools We Currently Work With</h3>
                                <Row className="text-center">
                                    <Col sm={6}>
                                        <a href="https://www.acps.k12.va.us/">
                                            <Image fluid width="70px" height="auto" className="" src={acps_logo}  alt="acps logo"/>
                                        </a>
                                    </Col>
                                    <Col sm={6}>
                                        <a href="https://www.pgcps.org/">
                                            <Image fluid width="70px" height="auto" className="" src={pgcps_logo}  alt="pgcps logo"/>
                                        </a>
                                    </Col>
                                </Row>
                            </div>
                      </Col>
                  </Row>
                  <Col sm={6} md={4}/>
                    <Col className="item social">
                        <a onClick={rerouteToLinkedin}><i className="icon ion-social-linkedin"><FontAwesomeIcon icon={faLinkedin}/></i></a>
                        <a onClick={rerouteToInstagram}><i className="icon ion-social-instagram"><FontAwesomeIcon icon={faInstagram}/></i></a>
                    </Col>
                  <p className="copyright">
                    © 2021. Built by Matthew Sewell |{" "}
                    <a onClick={rerouteToGithub} style={{color: "#f0f9ff", "textDecoration": "underline", "cursor": "pointer"}} >Github</a>{" "}|
                  </p>
              </div>
          </footer>
      </div>


    </div>
  )
}