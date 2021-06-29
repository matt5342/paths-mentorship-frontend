import React from 'react';
import mor_alkaslasi from '../assets/who_we_are/mor_alkaslasi.png'; 
import brittany_sincox from '../assets/who_we_are/brittany_sincox.png'; 
import { Row, Col } from 'react-bootstrap';
import acps_logo from '../assets/logos/acps_logo.png'; 
import pgcps_logo from '../assets//logos/pgcps_logo.png'; 

export default function AboutUs() {
  return (
    <div className="container">
        <Row className="justify-content-center">
            <h1><strong>Who Are We?</strong></h1>
        </Row>
        <Row className="justify-content-center m-5 text-center">
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
        <Row className="justify-content-center">
            <h2><strong>Program Directors</strong></h2>
            <br></br><br></br><br></br>
        </Row>
        <Row className="justify-content-center text-center">
            <Col>
                <img width="70%" height="auto" className="img-responsive mx-auto" src={mor_alkaslasi}  alt="logo"/>
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
                <img width="70%" height="auto" className="img-responsive mx-auto" src={brittany_sincox}  alt="logo"/>
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
        <Row className="justify-content-center">
            <h2><strong>Executive Committee Members</strong></h2>
        </Row>
        <br></br>
        <Row>
            <Col className="justify-content-center">
                <h4 className="text-center">PGCPS Committee</h4>
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
                <h4 className="text-center">ACPS Committee</h4>
                <p>
                    <strong>Alison Bashford</strong>, Administrative Secretary<br></br>
                    <strong>Katherine Degner</strong>, Development Workshop Coordinator<br></br>
                    <strong>Surina Patel</strong>, Development Workshop Coordinator<br></br>
                    <strong>Dr. Meghan Schott</strong>, Development Workshop Coordinator
                </p>
            </Col>
        </Row>
        <hr></hr>
        <Row className="justify-content-center">
            <h4><strong>With Support From</strong></h4>
        </Row>
        <br></br>
        <Row className="justify-content-center">
            <Col className="col-md-2 " />
            <Row>
                <Col className="text-center" sm={6}>
                    <img width="150px" height="auto" className="img-responsive mx-auto" src={pgcps_logo}  alt="logo"/>
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
                    <img width="150px" height="auto" className="img-responsive mx-auto" src={acps_logo}  alt="logo"/>
                </Col>
                <Col sm={6} className="">
                    <p>
                    Dr. Linda Zanin, George Washington University<br></br>
                    Dr. Tricia Jacobs, ACPS Career and Technical Education<br></br>
                    Michele Coffman, Laura Evans, ACPS Governor’s Health Sciences Academy<br></br>
                    Patrick Corr, George Washington University<br></br>
                    MediCorps Task Force

                    </p>
                </Col>
            </Row>
        </Row>
        <br></br><hr></hr>

    </div>
  )
}
