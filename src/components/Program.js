import React from 'react';
import { Carousel, Row, Col } from 'react-bootstrap'
import program_slides_career_seminars from '../assets/program_slides_career_seminars.png'; 
import program_slides_dev_workshops from '../assets/program_slides_dev_workshops.png'; 
import program_slides_mentorship from '../assets/program_slides_mentorship.png'; 
import program_slides_science_project from '../assets/program_slides_science_project.png'; 
import acps_logo from '../assets/acps_logo.png'; 
import pgcps_logo from '../assets/pgcps_logo.jpeg'; 

const program_slides = [
    program_slides_career_seminars,  
    program_slides_dev_workshops,  
    program_slides_mentorship,  
    program_slides_science_project  
]

export default function Program() {
  return (
    <div className="container">
        <h1>Programs</h1>
        <div >
            <Carousel className="myCarousel">
                {program_slides.map((slide) => {
                    return (
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={slide}
                            alt="Slide"
                            />
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </div>
        <hr></hr>
        <div>
            <h2>Schools We Currently Work With</h2>
            <div className="row">
                <div className="column">
                    <a href="https://www.acps.k12.va.us/">
                        <img width="200px" height="200px" className="" src={acps_logo}  alt="acps logo"/>
                    </a>
                    
                </div>
                <div className="column">
                    <a href="https://www.pgcps.org/">
                        <img width="200px" height="200px" className="" src={pgcps_logo}  alt="pgcps logo"/>
                    </a>
                </div>
            </div>

        </div>
    </div>
  )
}
