import React from 'react';
import { Row, Col } from 'react-bootstrap'
import career_seminars from '../assets/program_slides/career_seminars.png'; 
import dev_workshops from '../assets/program_slides/dev_workshops.png'; 
import mentorship from '../assets/program_slides/mentorship.png'; 
import science_project from '../assets/program_slides/science_project.png'; 
import ProgramSlides from './presentational/ProgramSlides';
import ProgramTable from './presentational/ProgramTable';

const program_slides = [
    mentorship,  
    dev_workshops,  
    science_project,  
    career_seminars  
]

export default function Program() {
  return (
    <div className="container">
        <h1>Programs</h1>
        <Row >
            <ProgramSlides />
        </Row>
        <br></br>
        <Row>
            <ProgramTable />
        </Row>
        <hr></hr><br></br>
        <Row>
            <h2>2020-2021</h2>
        </Row>
        
    </div>
  )
}
