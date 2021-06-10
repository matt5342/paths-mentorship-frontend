import React from 'react';
import { Carousel } from 'react-bootstrap'
import career_seminars from '/Users/mattsewell/Development/pathsmentorship/frontend/paths-mentorship/src/assets/program_slides/career_seminars.png'; 
import dev_workshops from '/Users/mattsewell/Development/pathsmentorship/frontend/paths-mentorship/src/assets/program_slides/dev_workshops.png'; 
import mentorship from '/Users/mattsewell/Development/pathsmentorship/frontend/paths-mentorship/src/assets/program_slides/mentorship.png'; 
import science_project from '/Users/mattsewell/Development/pathsmentorship/frontend/paths-mentorship/src/assets/program_slides/science_project.png'; 


const program_slides = [
    {title: "Mentorship",
        image: mentorship},  
    {title: "Development Workshops", 
        image: dev_workshops},  
    {title: "Action Potential Initiative", 
        image: science_project},
    {title: "Career Seminars", 
        image: career_seminars}
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
                        src={slide.image}
                        alt="Slide"
                        
                        />
                        <Carousel.Caption>
                            <p>{slide.title}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })}
        </Carousel>
    </div>
  )
}
export default ProgramSlides;