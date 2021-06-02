import React from 'react';
import { Accordion, Card, Button, Row, Col } from 'react-bootstrap';
import website_vertical from '../assets/opportunities/website_vertical.png'; 

export default function Opportunities() {
  return (
    <div className="container">
        <Row>
            <Col style={{"display": "block", "margin": "auto"}}>
                <img width="400px" height="auto" className="img-responsive" src={website_vertical}  alt="logo" />
            </Col>
            <Col>
                <Accordion defaultActiveKey="0" >
                <Card className="text-center">
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        <Card.Header>
                            Prospective Mentor
                        </Card.Header>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            We value near-peer mentorship. Our mentors are young, working professionals in biology and 
                            health-related fields in the DMV area. Our mentors must complete background verification through 
                            the necessary school systems, attend mentor orientation, and commit to enriching student experience 
                            by providing exceptional guidance and support.
                            <br></br><br></br>
                            Our mentors commit to meeting with their students at least twice a month, and to keeping an 
                            open line of communication throughout the program. In the past, mentor and students have built 
                            strong bonds that go beyond the course of the program.
                            <br></br><br></br>
                            If you are interested in serving as a mentor, our recruitment process begins every August. 
                            Fill out this form so we can notify you when recruitment opens. If you have any questions, 

                            <a href="/contact"> contact us</a>!
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className="text-center">
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        <Card.Header>
                            Prospective Partner
                        </Card.Header>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            We are always looking for experiential opportunities for our exceptional students. 
                            These can include summer internships, part time jobs, volunteer work, or field trips and job shadowing. 
                            The enriching activities we offer prepare our students to be assets to any professional community.
                            <br></br><br></br>
                            We have previously connected our exceptional students with special summer opportunities at FamilyChoice Healthcare and at Georgetown University. 
                            Our goal is to create a pipeline wherein we teach student the skills they will need to succeed in their jobs and internships.
                            <br></br><br></br>
                            If you are interested in collaborating with our program to provide select students with these 
                            valuable experiences for professional development, let’s set up a meeting! 
                            We are interested in developing partnerships with local health providers and companies.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className="text-center">
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                        <Card.Header>
                            Prospective Sponsor
                        </Card.Header>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            PATHS Mentorship is a blossoming initiative run by passionate volunteers who want to 
                            make a difference in the futures of STEM and health focused students in the DMV area. 
                            In the past year, the free availability of many online softwares allowed us to operate at no cost for nearly two years.
                            <br></br><br></br>
                            As program aspirations grow larger, we aim to partner with organizations to provide scholarships, 
                            in-person enrichment events, and technical training to provide our students with the necessary 
                            skills for future career opportunities. 
                            <br></br><br></br>
                            If you are interested in helping this program reach new heights, 
                            please contact us and we can meet to discuss any sponsorship ideas. 
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                </Accordion>
            </Col>
        </Row>
    </div>

  )
}