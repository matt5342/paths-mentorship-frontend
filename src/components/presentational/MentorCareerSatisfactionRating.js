import React from 'react';
import { Row, Col } from 'react-bootstrap';


export default function MentorCareerSatisfactionRating() {
  return (

      <>
            <Col>
                <h3>Mentorship Experience</h3>
                <Row className="justify-content-center">
                  <div className="star-rating d-flex justify-content-center flex-row-reverse">
                    <input checked type="radio"/>
                      <label></label>
                      <label></label>
                      <label></label>
                      <label></label>
                  </div>
                  <div className="half-star-rating d-flex justify-content-center flex-row-reverse">
                    <input checked type="radio"/>
                      <label></label>
                  </div>
                </Row>
            </Col>
            <Col>
                <h3>Career Seminar Satisfaction</h3>
                <Row className="justify-content-center">
                  <div className="star-rating d-flex justify-content-center flex-row-reverse">
                    <input checked type="radio"/>
                      <label></label>
                      <label></label>
                      <label></label>
                      <label></label>
                  </div>
                  <div className="empty-star-rating d-flex justify-content-center flex-row-reverse">
                    <input checked type="radio"/>
                      <label></label>
                  </div>
                </Row>
            </Col>
            <Row>
              <Col sm>
                <p><strong>"My mentor reached out quickly and is super nice and helpful, 
                  I enjoy talking with her and she is totally ready to answer any questions I have."</strong><br></br>
                  -Medical Laboratory Sciences Student
                </p>
              </Col>
              <Col sm>
                <p><strong>"Please keep doing career sessions (preparing for internships/career seminars). 
                  Those help and gives me something to look forward to in the future. It also opens the 
                  career in the field for those who are not sure what they want to do."</strong><br></br>
                  -Health and Biosciences Student
                </p>
              </Col>
              <Col sm>
                <p><strong>"I like that I can talk with someone who is pursuing a career in health sciences, 
                  and that I can learn more about what it would be like to follow this pathway."</strong><br></br>
                  -Medical Laboratory Sciences Student
                </p>
              </Col>
            </Row>

      </>

  )

}