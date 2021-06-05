import React from 'react';
import { Table, Image } from 'react-bootstrap';

const ProgramDevCards = ({card_info}) => {
    return (
        <>
            {card_info.map((workshop) => {
                return (
                    <div className="col-md-4 d-flex card-container">
                        <div className="card card-flip m-4">
                            <div className="front card-block ">
                                <Image fluid width="60%" height="auto" className="img-responsive mx-auto" src={workshop.image}  alt="logo"/>
                                <h5 className="card-title">{workshop.title}</h5>
                            </div>
                            <div className="back card-block">
                                <h5 className="card-title"><strong>{workshop.title}</strong></h5>
                                <Table striped bordered hover size="sm">
                                    <th>Students Learned</th>
                                    {workshop.bullets.map((bullet) => {
                                        return <tr><td>{bullet}</td></tr>
                                    })}
                                </Table>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}
export default ProgramDevCards;