import React from 'react';
import { Carousel, Image, Row, Col } from 'react-bootstrap'
import career_seminars from '../assets/program_slides/career_seminars.png'; 
import dev_workshops from '../assets/program_slides/dev_workshops.png'; 
import mentorship from '../assets/program_slides/mentorship.png'; 
import science_project from '../assets/program_slides/science_project.png'; 
import ProgramTable from './ProgramTable';

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
            <Carousel className="myCarousel">
                {program_slides.map((slide) => {
                    return (
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={slide}
                            alt="Slide"
                            
                            />
                            <Carousel.Caption>
                                {/* <h1>Title</h1> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
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
