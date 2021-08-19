import React from 'react';
import mor_alkaslasi from '../assets/who_we_are/mor_alkaslasi.png'; 
import brittany_sincox from '../assets/who_we_are/brittany_sincox.png'; 
import matthew_nebiyou from '../assets/who_we_are/matthew_nebiyou.jpeg'; 
import grace_taumoefolau from '../assets/who_we_are/grace_taumoefolau.jpg'; 
import { Row, Col, Accordion, Button, Card } from 'react-bootstrap';
import acps_logo from '../assets/logos/acps_logo.png'; 
import pgcps_logo from '../assets//logos/pgcps_logo.png'; 

export default function AboutUs() {
  return (
    <div className="container">
        <Row className="justify-content-center">
            <h1><strong>Who Are We?</strong></h1>
        </Row>
        <Row className="justify-content-center m-3 text-center">
            <p>
                The Program for Advancing the Health Sciences began in 2018 as the Health and Biosciences Mentorship 
                Program at Prince George’s County Public Schools.
                In 2020, it became the Biomedical Mentorship Program, servicing students at Prince George’s County 
                Public Schools in all health-related CTE programs.
                Also in 2020, we started working with Alexandria City Public Schools, bringing mentorship to
                 students in the Governor’s Health Sciences Academy.
            </p>
        </Row>
        <hr></hr>
        <Row className="justify-content-center m-3 text-center">
            <h2><strong>Our Mission</strong></h2>
            <p>
                Our mission is to prepare students for careers in STEM and health by connecting them with near peer 
                mentors actively working in these fields. PATHS aims to open doors for students to pursue higher 
                education and provides a stable structure for these future professionals to flourish. More than mentors: 
                we empower, inspire, and guide students down the path to careers in STEM and health.
            </p>
        </Row>
        <hr></hr>
        <Row className="justify-content-center">
            <h2><strong>Program Directors</strong></h2>
            <br></br><br></br><br></br>
        </Row>
        <Row className="justify-content-center text-center">
            <Col>
                <img width="60%" height="auto" className="img-responsive mx-auto" src={mor_alkaslasi}  alt="logo"/>
                <br></br>
                <p>
                    <br></br>
                    <h5><strong>Mor Alkaslasi</strong></h5>
                    PhD student in Neuroscience
                    <br></br>
                    Brown University-NIH
                    <br></br>
                    Volunteer, Co-Director
                </p>
            </Col>
            <Col>
                <img width="60%" height="auto" className="img-responsive mx-auto" src={brittany_sincox}  alt="logo"/>
                <br></br>
                <p>
                    <br></br>
                    <h5><strong>Brittany Sincox</strong></h5>
                    PhD student in Neuroscience
                    <br></br>
                    University College London-NIH
                    <br></br>
                    Volunteer, Co-Director
                </p>
            </Col>
        </Row>
        <hr></hr>
        <Row className="justify-content-center">
            <h2 className="text-center"><strong>Executive Committee Members</strong></h2>
        </Row>
        <Accordion defaultActiveKey="0" flush>
            <Card style={{"border-color": "transparent"}}>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    <Card.Header as={"h4"} style={{"background-color": ""}} className="text-left">
                        2021-2022
                    </Card.Header>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                    <br></br>
                    <Row className="justify-content-center text-center">
                        <Col>
                            <img width="60%" height="auto" className="img-responsive mx-auto" src={matthew_nebiyou}  alt="logo"/>
                            <br></br>
                            <p>
                                <br></br>
                                <h5><strong>Matthew Nebiyou</strong></h5>
                                Post-baccalaureate Fellow, NIH
                                <br></br>
                                PGCPS Committee Head
                            </p>
                        </Col>
                        <Col>
                            <img width="60%" height="auto" className="img-responsive mx-auto" src={grace_taumoefolau}  alt="logo"/>
                            <br></br>
                            <p>
                                <br></br>
                                <h5><strong>Grace Taumoefolau</strong></h5>
                                PhD student in Cell, Molecular, Developmental Biology and Biophysics
                                <br></br>
                                Johns Hopkins University-NIH
                                <br></br>
                                ACPS Committee Head
                            </p>
                        </Col>
                    </Row>
                    </Card.Body>
                </Accordion.Collapse>
                </Card>
                <Card style={{"border-color": "transparent"}}>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    <Card.Header as={"h4"} style={{"background-color": ""}} className="text-left">
                        2020-2021
                    </Card.Header>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        <Row>
                            <Col className="justify-content-center">
                                <h4 className="text-center"><strong>PGCPS Committee</strong></h4>
                                <p>
                                    <strong>Erin Fingleton</strong>, Development Workshop Coordinator<br></br>
                                    <strong>Bruny Kenou</strong>, Tutoring Coordinator<br></br>
                                    <strong>Ruby Lam</strong>, Development Workshop Coordinator<br></br>
                                    <strong>Dan Moyer</strong>, Development Workshop Coordinator<br></br>
                                    <strong>Matthew Nebiyou</strong>, Development Workshop Coordinator<br></br>
                                    <strong>Adit Sabnis</strong>, Career Seminar Coordinator
                                </p>
                            </Col>
                            <Col className="justify-content-center">
                                <h4 className="text-center"><strong>ACPS Committee</strong></h4>
                                <p>
                                    <strong>Alison Bashford</strong>, Administrative Secretary<br></br>
                                    <strong>Katherine Degner</strong>, Development Workshop Coordinator<br></br>
                                    <strong>Surina Patel</strong>, Development Workshop Coordinator<br></br>
                                    <strong>Dr. Meghan Schott</strong>, Development Workshop Coordinator
                                </p>
                            </Col>

                        </Row>
                    <br></br>
                    </Card.Body>
                </Accordion.Collapse>
                
            </Card>
            
        </Accordion>
        <hr></hr>
        <Row className="justify-content-center">
            <h4><strong>With Support From</strong></h4>
        </Row>
        <br></br>
        <Row className="justify-content-center">
            <Col className="col-md-2 " />
            <Row>
                <Col className="text-center" sm={6}>
                    <img width="150px" height="auto" className="img-responsive mx-auto mb-3" src={pgcps_logo}  alt="logo"/>
                </Col>
                <Col sm={6} className="">
                    <p>
                        Dr. Jamie Hill-Daniel, Georgetown University<br></br>
                        Dr. Herbert Geller, National Institutes of Health<br></br>
                        Darlene Bruton, Dr. Regina Spruill, Melynda Maynard, PGCPS Career and Technical Education<br></br>
                        PGCPS Health and Biosciences Advisory Committee<br></br>
                    </p>
                    <br></br>
                </Col>

                <Col className="text-center" sm={6}>
                    <img width="150px" height="auto" className="img-responsive mb-3 mx-auto" src={acps_logo}  alt="logo"/>
                </Col>
                <Col sm={6} className="">
                    <p>
                        Dr. Tricia Jacobs, ACPS, Career and Technical Education<br></br>
                        Michele Coffman, Laura Evans, ACPS, Governor’s Health Sciences Academy<br></br>
                        Dr. Linda Zanin, Teri Capshaw, the George Washington University, <br></br>Community Medi-Corps Program<br></br>
                        Dr. Patrick Corr, Governor's Health Sciences Academy, <br></br>the George Washington University
                    </p>
                </Col>
            </Row>
        </Row>
        <br></br><hr></hr>

    </div>
  )
}
