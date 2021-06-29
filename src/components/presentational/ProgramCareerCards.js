import React from 'react';
import { Table } from 'react-bootstrap';

const ProgramCareerCards = ({card_info}) => {
    return (
        <>
            {card_info.map((workshop) => {
                return (
                    <div className="col-5 card-container">
                        <div className="card card-flip m-1" style={{"maxHeight": '100px'}}>
                            <div className="front card-block justify-content-center">
                                <h2 className="card-title">{workshop.title}</h2>
                            </div>
                            <div className="back card-block">
                                <Table size="sm">
                                    <th>Speaker(s)</th>
                                    {workshop.bullets.map((bullet) => {
                                        return <tr>{bullet}</tr>
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
export default ProgramCareerCards;