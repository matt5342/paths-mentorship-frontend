import React from 'react';
import { Image } from 'react-bootstrap';
import impact_20_21 from '../assets/impact/impact_20_21.png'; 

export default function Impact() {
  return (
    <div className="container text-center">
        <h2><strong>Our Impact</strong></h2>
        <Image fluid width="auto" height="auto" className="img-responsive mx-auto" src={impact_20_21}  alt="logo"/>

    </div>

  )

}