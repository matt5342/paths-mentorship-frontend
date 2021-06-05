import React from 'react';
import { Row, Image, Table } from 'react-bootstrap'
import ProgramSlides from './presentational/ProgramSlides';
import ProgramTable from './presentational/ProgramTable';
import academic_success_icon from '/Users/mattsewell/Development/pathsmentorship/frontend/paths-mentorship/src/assets/program_cards/academic_success_icon.png'
import career_exploration_icon from '/Users/mattsewell/Development/pathsmentorship/frontend/paths-mentorship/src/assets/program_cards/career_exploration_icon.png'
import college_app_icon from '/Users/mattsewell/Development/pathsmentorship/frontend/paths-mentorship/src/assets/program_cards/college_app_icon.png'
import college_readiness_icon from '/Users/mattsewell/Development/pathsmentorship/frontend/paths-mentorship/src/assets/program_cards/college_readiness_icon.png'
import summer_jobs_icon from '/Users/mattsewell/Development/pathsmentorship/frontend/paths-mentorship/src/assets/program_cards/summer_jobs_icon.png'
import wellness_check_icon from '/Users/mattsewell/Development/pathsmentorship/frontend/paths-mentorship/src/assets/program_cards/wellness_check_icon.png'
const dev_worshops_cards_info = [
    {title: "Academic Success in a Virtual World", 
        bullets: [
            "How to set up their ideal workspace", 
            "Identify their study style", 
            "New techniques to manage their study time"
        ], 
        image: academic_success_icon
    },
    {title: "College Readiness", 
        bullets: [
            "The roadmap for building a college application", 
            "How to identify the college that's right for you", 
            "Various ways to pay for college"
        ], 
        image: college_readiness_icon
    }, 
    {title: "Wellness Check", 
        bullets: [
            "The difference between good stress and bad stress", 
            "The physical toll of stress", 
            "Methods to cope with stress"
        ], 
        image: wellness_check_icon
    }, 
    {title: "Extracurriculars and Summer Internships", 
        bullets: [
            "The values of different types of extracurriculars", 
            "How to find jobs and internships",
            "How to build a resume/CV"
        ], 
        image: summer_jobs_icon
    },
    {title: "Career Exploration", 
        bullets: [
            "What aspects of a career are important to them", 
            "How mentors arrived at their careers",
            "Methods for exploring career options"
        ], 
        image: career_exploration_icon
    },
    {title: "Intro to the College Application Process", 
        bullets: [
            "What they want in a college/university", 
            "How to pay for college",
            "What college life can be like", 
            "All the things that go into a college application"
        ], 
        image: college_app_icon
    }

]
let count = 0;
export default function Program() {
  return (
    <div className="container">
        <h1>Programs</h1>
        <Row >
            <ProgramSlides />
        </Row>
        <br></br>
        <Row>
            <ProgramTable />
        </Row>
        <hr></hr><br></br>
        <Row>
            <h2>2020-2021</h2>
        </Row>
        <Row>
            <h4>Development Workshops</h4>
        </Row>

        <div className="container">
            <div className="row text-center">
            {dev_worshops_cards_info.map((workshop) => {
                return (
                        <div className="col-md-4 d-flex card-container">
                        <div className="card card-flip m-4">
                            <div className="front card-block">
                                <Image fluid width="50%" height="auto" className="img-responsive mx-auto" src={workshop.image}  alt="logo"/>
                                <h5 className="card-title">{workshop.title}</h5>
                                {/* <h6 className="card-subtitle text-muted">Front Sub-title</h6> */}
                                {/* <p className="card-text">Front Text</p>  */}
                            </div>
                            <div className="back card-block">
                                <h5 className="card-title"><strong>{workshop.title}</strong></h5>
                                <Table striped bordered hover size="sm">
                                    {/* <h6 className="text-left">Students Learned:</h6> */}
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
            </div>
        </div>


    </div>
  )
}

// {dev_worshops_cards_info.map((workshop) => {
//     return (
//         <Card style={{ width: '18rem' }} className="program-card m-2">
//             <Card.Img variant="top" src={workshop.image} />
//             <Card.Header>{workshop.title}</Card.Header>
//             <Card.Body>
//                 <Card.Text className="">
//                     <ul>
//                         {workshop.bullets.map((bullet) => {
//                             return <li>{bullet}</li>
//                         }
//                         )}

//                     </ul>

//                 </Card.Text>
//             </Card.Body>
//         </Card>
//     )
// })}