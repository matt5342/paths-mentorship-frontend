import React from 'react';
import { OverlayTrigger, Popover } from 'react-bootstrap';

const ProgramBadges = ({card_info}) => {
    return (
        <>
            {card_info.map((workshop) => {
                return (
                    <div>
                        <OverlayTrigger
                            overlay={
                                <Popover className="p-2" id={workshop.title}>
                                    <Popover.Title className="text-center">Speaker(s)</Popover.Title>
                                    {/* <ul > */}
                                        {workshop.bullets.map((bullet) => {
                                            return (
                                                <div className="p-1">{bullet}</div>
                                            )
                                        })}

                                    {/* </ul> */}
                                </Popover>
                            }
                        >
                            <h1 className="p-2">
                                <span className='badge badge-primary p-4'>{workshop.title}</span>
                            </h1>

                        </OverlayTrigger>
                    </div>
                    
                )
            })}
        </>
    )
}
export default ProgramBadges;