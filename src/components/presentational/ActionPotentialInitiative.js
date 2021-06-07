import React from 'react';
import { Image, Col } from 'react-bootstrap';
import api_venn_text from '/Users/mattsewell/Development/pathsmentorship/frontend/paths-mentorship/src/assets/action_potential_initiative/api_venn_text.png'; 
import api_venn from '/Users/mattsewell/Development/pathsmentorship/frontend/paths-mentorship/src/assets/action_potential_initiative/api_venn.png'; 

export default function ActionPotentialInitiative() {
  return (

      <>
        <Col sm={6}>
            <Image fluid width="auto" height="auto" className="img-responsive mx-auto" src={api_venn}  alt="logo"/>
        </Col>
        <Col sm={6}>
            <Image fluid width="80%" height="auto" className="img-responsive mx-auto" src={api_venn_text}  alt="logo"/>
        </Col>
      </>

  )

}