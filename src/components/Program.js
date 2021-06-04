import React from 'react';
import { Carousel, Image } from 'react-bootstrap'
import career_seminars from '../assets/program_slides/career_seminars.png'; 
import dev_workshops from '../assets/program_slides/dev_workshops.png'; 
import mentorship from '../assets/program_slides/mentorship.png'; 
import science_project from '../assets/program_slides/science_project.png'; 
import acps_logo from '../assets/logos/acps_logo.png'; 
import pgcps_logo from '../assets//logos/pgcps_logo.png'; 

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
                        <Image fluid width="200px" height="200px" className="" src={acps_logo}  alt="acps logo"/>
                    </a>
                    
                </div>
                <div className="column">
                    <a href="https://www.pgcps.org/">
                        <Image fluid width="200px" height="200px" className="" src={pgcps_logo}  alt="pgcps logo"/>
                    </a>
                </div>
            </div>

        </div>
    </div>
  )
}
