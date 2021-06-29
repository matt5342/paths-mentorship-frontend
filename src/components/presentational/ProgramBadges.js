import React from 'react';
import { OverlayTrigger, Popover } from 'react-bootstrap';

const ProgramBadges = ({card_info}) => {
    return (
        <>
            {card_info.map((workshop) => {
                return (
                    <div>
                        <OverlayTrigger
                            placement="auto" 
                            overlay={
                                <Popover className="p-2" id={workshop.title}>
                                    <Popover.Title className="text-center">Speaker(s)</Popover.Title>
                                        {workshop.bullets.map((bullet) => {
                                            return (
                                                <div className="text-center p-1">{bullet}</div>
                                            )
                                        })}
                                </Popover>
                            }
                        >
                            <h2 className="p-2">
                                <span className='badge mx-responsive badge-primary p-4'>{workshop.title}</span>
                            </h2>

                        </OverlayTrigger>
                    </div>
                    
                )
            })}
        </>
    )
}
export default ProgramBadges;