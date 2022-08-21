import React, { useEffect, useState } from 'react';
import { Image, Row, Col } from 'react-bootstrap';
// import { useDispatch } from 'react-redux';
import impact_20_21 from '../assets/impact/impact_20_21.png'; 
// import { publicationService } from "../_services/publication.service";

export default function Impact() {

  // const [publications, setPublications] = useState([""]);
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   publicationService.getAll()
  //   .then(
  //     (response) => {
  //       setPublications(response.data);
  //     },
  //     (error) => {
  //       const _publications =
  //       (error.response &&
  //         error.response.data &&
  //         error.response.data.message) ||
  //       error.message ||
  //       error.toString();
    
  //       setPublications(_publications);
  //       })

  // }, [dispatch])

  return (
    <div className="container">
        <h2 className="text-center"><strong>Our Impact</strong></h2>
        <Row>
          <Col sm={7} className="justify-content-center mb-4">
            <Image fluid width="auto" height="50%" className="img-responsive mx-auto" src={impact_20_21}  alt="logo"/>
          </Col>
          <Col sm={5} className="justify-content-center">
            <div className="card impact-card">
              <div className="card-header h3">
                News & Updates
              </div>
              <div className="card-body">
              <div>
                <div className="h5">
                  Family Choice Healthcare sponsors the 2021 year end event for the PGCPS program!
                </div>
                <a href="https://www.marketwatch.com/press-release/family-choice-healthcare-sponsors-recent-educational-program-event-for-prince-georges-county-students-entering-college-2021-05-04" target="_blank">Read More...</a>
                <hr></hr>
              </div>
              <div>
                <div className="h5">
                  PATHS partners with the VA Governor’s Health Science Academy!
                </div>
                <a href="https://www.acps.k12.va.us/Page/3601" target="_blank">Read More...</a>
                <hr></hr>
              </div>
                {/* {!publications || publications.length === 0 || !publications[0].title ? <div><span className="spinner-border spinner-border-sm mr-1"></span> Loading</div> : 
                  publications.reverse().map((publication) => {
                    return(
                      <div>
                        <div className="h5">
                          {publication.title}
                        </div>
                        <div>
                          {publication.description}
                        </div>
                        <a href={publication.link} target="_blank">Read More...</a>
                        <hr></hr>
                      </div>
                    )
                  })} */}
                
              </div>
            </div>
          </Col>
        </Row>
    </div>

  )

}