import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap'

export default function StudentsParents() {

    return(
        <div className="container">
            <h3 className="text-center">
                Choose School System
            </h3>
            <Row xs={1} md={2} lg={2} className="justify-content-center p-4">
                <Button size="lg" className="p-2 m-2">PGCPS</Button>
                <Button size="lg" className="p-2 m-2">ACPS</Button>
            </Row>
            <p><a href="login">Log In</a> or <a href="signup">Sign Up</a></p>
        </div>
    )
}