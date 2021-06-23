import React from 'react';
import group_collab from '../assets/home/group_collab.png'; 
import temp_logo from '../assets/logos/temp_logo.png'; 
import pathway from '../assets/home/pathway.png'; 
import pgcps_year_end_report from '../assets/home/pgcps_year_end_report.png'; 
import { Row, Col, Image } from 'react-bootstrap';
import ProgramTable from './presentational/ProgramTable';

export default function Home() {
  return (
    <div className="container">   
        <Row className="justify-content-center">
        <Image fluid width="800px" height="auto" className="img-responsive mx-auto" src={temp_logo}  alt="logo"/>
        </Row>
        <Row className="justify-content-center">
            <p>Formerly the Biomedical Mentorship Program</p>
        </Row>
        
        <hr></hr>
        <Row className="text-center">
            <Image fluid width="800px" height="auto" className="img-responsive mx-auto" src={group_collab}  alt="logo"/>
        </Row>
        <br></br>
        <Row className="justify-content-center">
            <h2>What We Do</h2>
        </Row>
        <Row className="text-center">
            <Col md={{ span: 6, offset: 3 }}>
                <h5>
                    We are a 100% virtual and volunteer-driven mentorship program.
                    We connect DMV area high school students who are interested in biology and health with young working professionals in the area.
                </h5>
            </Col>
        </Row>
        <hr></hr>
        <br></br>
        <Row className="text-center">
            <Image fluid width="60%" height="auto" className="img-responsive mx-auto" src={pathway}  alt="logo"/>
        </Row>
        <br></br>
        <br></br>
        <ProgramTable />   
    <hr></hr>
    <Row className="text-center">
            <Image fluid width="1000px" height="auto" className="img-responsive mx-auto" src={pgcps_year_end_report}  alt="logo"/>
    </Row>

    </div>
  )
}