import React from 'react';
import mor_alkaslasi from '../assets/who_we_are/mor_alkaslasi.png'; 
import andy_chia from '../assets/who_we_are/andy_chia.png'; 
import medha_krishnagiri from '../assets/who_we_are/medha_krishnagiri.jpeg'; 
import brittany_sincox from '../assets/who_we_are/brittany_sincox.png'; 
import matthew_nebiyou from '../assets/who_we_are/matthew_nebiyou.jpeg'; 
import grace_taumoefolau from '../assets/who_we_are/grace_taumoefolau.jpg'; 
import { Row, Col, Accordion, Button, Card } from 'react-bootstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
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

        <Tabs>
            <TabList>
                <Tab><h3 className="tab-link"><strong>2022-2023</strong></h3></Tab>
                <Tab><h3 className="tab-link"><strong>2021-2022</strong></h3></Tab>
                <Tab><h3 className="tab-link"><strong>2020-2021</strong></h3></Tab>
            </TabList>
            <TabPanel>
                <Row className="justify-content-center py-3">
                    <h2 className="text-center"><strong>Program Directors</strong></h2>
                </Row>
                <Row className="justify-content-center text-center">
                    <Col>
                    <img width="60%" height="auto" className="img-responsive mx-auto" src={medha_krishnagiri}  alt="logo"/>
                        <br></br>
                        <p>
                            <br></br>
                            <h5><strong>Medha Krishnagari</strong></h5>
                            Science Policy Analyst
                            <br></br>
                            Volunteer, Co-Director
                        </p>
                    </Col>
                    <Col>
                        <img width="60%" height="auto" className="img-responsive mx-auto" src={andy_chia}  alt="logo"/>
                        <br></br>
                        <p>
                            <br></br>
                            <h5><strong>Andy Chia</strong></h5>
                            PhD student, Johns Hopkins University
                            <br></br>
                            Volunteer, Co-Director
                        </p>
                    </Col>
                </Row>
            </TabPanel>
            <TabPanel>
                <Row className="justify-content-center py-3">
                    <h2 className="text-center"><strong>Program Directors</strong></h2>
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
                            Volunteer, Co-Director
                        </p>
                    </Col>
                </Row>
                <Row className="justify-content-center py-3">
                    <h2 className="text-center"><strong>Executive Committee Members</strong></h2>
                </Row>
                <Row className="justify-content-center text-center">
                    <Col>
                        <img width="60%" height="auto" className="img-responsive mx-auto" src={matthew_nebiyou}  alt="logo"/>
                        <br></br>
                        <p>
                            <br></br>
                            <h5><strong>Matthew Nebiyou</strong></h5>
                            Research Fellow
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
                            ACPS Committee Head
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col className="justify-content-center">
                        <h4 className="text-center"><strong>PGCPS Committee</strong></h4>
                        <p>
                            <strong>Kaitlin Ballenger</strong>, Development Workshop Coordinator<br></br>
                            <strong>Kathleen Carmichael</strong>, Administrative Secretary<br></br>
                            <strong>Daniel Clark</strong>, Development Workshop Coordinator<br></br>
                            <strong>Ariana Marangakis-Price</strong>, Development Workshop Coordinator<br></br>
                            <strong>Vicki Remley</strong>, API Coordinator<br></br>
                            <strong>Adit Sabnis</strong>, Career Seminar Coordinator<br></br>
                            <strong>Rachel Tavory</strong>, Development Workshop Coordinator
                            
                        </p>
                    </Col>
                    <Col className="justify-content-center">
                        <h4 className="text-center"><strong>ACPS Committee</strong></h4>
                        <p>
                            <strong>Katherine Degner</strong>, API Coordinator<br></br>
                            <strong>Paige Faasuamalie</strong>, Development Workshop Coordinator<br></br>
                            <strong>Charlotte Godfrey</strong>, Development Workshop Coordinator<br></br>
                            <strong>Sydnee Gould</strong>, Administrative Secretary<br></br>
                            <strong>Adit Sabnis</strong>, Career Seminar Coordinator<br></br>
                            <strong>Jacquelyn Willis</strong>, Development Workshop Coordinator
                        </p>
                    </Col>
                </Row>
            </TabPanel>
            <TabPanel>
            <Row className="justify-content-center py-3">
                    <h2 className="text-center"><strong>Program Directors</strong></h2>
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
                            Volunteer, Co-Director
                        </p>
                    </Col>
                </Row>
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
            </TabPanel>
        </Tabs> 

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
                        Dr. Linda Zanin, Teri Capshaw, The George Washington University School of Medicine and Health Sciences,
                        Community Medi-Corps Program<br></br>
                        Dr. Patrick Corr, Governor's Health Sciences Academy, <br></br>
                        The George Washington University School of Medicine and Health Sciences
                    </p>
                </Col>
            </Row>
        </Row>
        <br></br><hr></hr>

    </div>
  )
}
