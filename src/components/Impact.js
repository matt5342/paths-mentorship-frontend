import React, { useEffect, useState } from 'react';
import { Image, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import impact_20_21 from '../assets/impact/impact_20_21.png'; 
import { publicationService } from "../_services/publication.service";

export default function Impact() {

  const [publications, setPublications] = useState("");
  const dispatch = useDispatch()
  useEffect(() => {
    publicationService.getAll()
    .then(
      (response) => {
        setPublications(response.data);
      },
      (error) => {
        const _publications =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
    
        setPublications(_publications);
        })

  }, [dispatch])

  return (
    <div className="container text-center">
        <h2><strong>Our Impact</strong></h2>
        <Row>
          <Col className="col-md-8">
            <Image fluid width="auto" height="auto" className="img-responsive mx-auto" src={impact_20_21}  alt="logo"/>
          </Col>
          <Col className="col-md-4">
            <div className="card impact-card">
              <div className="card-header h3">
                News & Updates
              </div>
              <div className="card-body">
                {!publications ? <div>No Updates Yet</div> : 
                  publications.map((publication) => {
                    return(
                      <div>
                        <div className="h5">
                          {publication.title}
                        </div>
                        <div>
                          {publication.description}
                        </div>
                        <a href={publication.link}>Read More...</a>
                        <hr></hr>
                      </div>
                    )
                  })}
                
              </div>
            </div>
          </Col>
        </Row>
    </div>

  )

}