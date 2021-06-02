import React from 'react';
import mor_alkaslasi from '../assets/who_we_are/mor_alkaslasi.png'; 
import brittany_sincox from '../assets/who_we_are/brittany_sincox.png'; 
import { Row, Col } from 'react-bootstrap';
import acps_logo from '../assets/logos/acps_logo.png'; 
import pgcps_logo from '../assets//logos/pgcps_logo.png'; 

export default function WhoWeAre() {
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
                <img width="400px" height="auto" className="img-responsive mx-auto" src={mor_alkaslasi}  alt="logo"/>
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
                <img width="400px" height="auto" className="img-responsive mx-auto" src={brittany_sincox}  alt="logo"/>
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
        <Row className="">
            <h4><strong>With Support From:</strong></h4>
        </Row>
        <Row>
            <Col className="col-md-3">
                <img width="150px" height="auto" className="img-responsive mx-auto" src={pgcps_logo}  alt="logo"/>
            </Col>
            <Col>
                <p>
                Dr. Jamie Hill-Daniel, Georgetown University<br></br>
                Dr. Herbert Geller, National Institutes of Health<br></br>
                Darlene Bruton, Dr. Regina Spruill, Melynda Maynard, PGCPS Career and Technical Education<br></br>
                PGCPS Health and Biosciences Advisory Committee<br></br>

                </p>
            </Col>
        </Row>
        <br></br><hr></hr>
        <Row>
            <Col className="col-md-3">
                <img width="150px" height="auto" className="img-responsive mx-auto" src={acps_logo}  alt="logo"/>
            </Col>
            <Col>
                <p>
                Dr. Linda Zanin, George Washington University<br></br>
                Tricia Jacobs, ACPS Career and Technical Education<br></br>
                Michele Coffman, ACPS Governor’s Health Sciences Academy<br></br>
                Patrick Corr, George Washington University
                MediCorps Task Force

                </p>
            </Col>
        </Row>
    </div>
  )
}
