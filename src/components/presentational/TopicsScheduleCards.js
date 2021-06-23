import React from 'react';


const TopicsScheduleCards = ({card_info}) => {
    return (
        <>
            {card_info.map((topic) => {
                return (
                    <div className="p-2 text-center">
                        <div class="card card-topic">
                        {/* <Card className="card-topic p-2"> */}
                            <h4 class=" info-color white-text text-center py-5">
                                {topic.topic}
                            </h4>
                            {/* <Card.Subtitle>{topic.date}</Card.Subtitle> */}
                        {/* </Card> */}
                        </div>
                        <h5 className="text-center">{topic.date}</h5>
                    </div>
                    
                )
            })}
        </>
    )
}
export default TopicsScheduleCards;