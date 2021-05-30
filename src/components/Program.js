import React from 'react';
import { Carousel } from 'react-bootstrap'
import group_collab from '../assets/group_collab.png'; 
import program_components_pie from '../assets/program_components_pie.png'; 


export default function Program() {
  return (
    <div className="container">
        <h1>Programs</h1>
        <div >
            <Carousel className="myCarousel">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={group_collab}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={program_components_pie}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    </div>
  )
}