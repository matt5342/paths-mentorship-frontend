import React from 'react';
import { Row, Col } from 'react-bootstrap';


export default function MentorCareerSatisfactionRating() {
  return (

      <>
            <Col>
                <h3>Mentorship Experience</h3>
                <Row>
                  <div className="star-rating d-flex justify-content-center flex-row-reverse">
                    <input checked type="radio" name="rating" />
                      <label></label>
                      <label></label>
                      <label></label>
                      <label></label>
                      <label style={{"content": "'\f123' !important"}}></label>
                      {/* <div className="half-star-rating">
                        <input checked type="radio" name="rating" />
                          <label></label>
                      </div> */}
                  </div>
                  {/* <div className="half-star-rating risingstar d-flex justify-content-center flex-row-reverse">
                    <input checked type="radio" name="rating" />
                      <label></label>
                  </div> */}
                </Row>
            </Col>
            <Col>
                <h3>Career Seminar Satisfaction</h3>
            </Col>

      </>

  )

}