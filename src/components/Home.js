import React from 'react';
import group_collab from '../assets/group_collab.png'; 
import program_components_pie from '../assets/program_components_pie.png'; 
import { Row, Col, Table } from 'react-bootstrap';

export default function Home() {
  return (
    <div className="container">   
        <Row className="text-center">
            <img width="800px" height="auto" className="img-responsive mx-auto" src={group_collab}  alt="logo"/>
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
        <br></br>
        <Row className="text-center">
            <img width="800px" height="auto" className="img-responsive mx-auto" src={program_components_pie}  alt="logo"/>
        </Row>
        <br></br>
        <br></br>
        <Table>
            <tbody>
                <tr>
                <td><strong>Mentorship</strong></td>
                <td>
                    Students are paired with local working professionals based on common interests. 
                    Mentors meet with students regularly to provide professional and academic support.
                </td>
                </tr>
                <tr>
                <td><strong>Development Workshops</strong></td>
                <td>
                    Intended to help students develop the skills required to succeed in college and in academic/professional environments
                </td>
                </tr>
                <tr>
                <td ><strong>Science Project</strong></td>
                <td>
                    Students optionally develop a scientific research question and carry out a small research project. 
                    They are lead through the scientific method and guided through the project by their mentor.
                </td>
                </tr>
                <tr>
                <td ><strong>Career Seminars</strong></td>
                <td>
                    Working professionals present to students about their careers, sharing the day to day life and steps necessary 
                    to reach their career. Emphasis on non-typical health-related careers.
                </td>
                </tr>
            </tbody>
    </Table>

    </div>
  )
}