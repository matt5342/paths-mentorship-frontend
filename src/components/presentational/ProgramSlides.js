import React from 'react';
import { Carousel } from 'react-bootstrap'
import career_seminars from '/Users/mattsewell/Development/pathsmentorship/frontend/paths-mentorship/src/assets/program_slides/career_seminars.png'; 
import dev_workshops from '/Users/mattsewell/Development/pathsmentorship/frontend/paths-mentorship/src/assets/program_slides/dev_workshops.png'; 
import mentorship from '/Users/mattsewell/Development/pathsmentorship/frontend/paths-mentorship/src/assets/program_slides/mentorship.png'; 
import science_project from '/Users/mattsewell/Development/pathsmentorship/frontend/paths-mentorship/src/assets/program_slides/science_project.png'; 


const program_slides = [
    mentorship,  
    dev_workshops,  
    science_project,  
    career_seminars  
]

const  ProgramSlides =() => {
  return (
    <div>

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
    </div>
  )
}
export default ProgramSlides;