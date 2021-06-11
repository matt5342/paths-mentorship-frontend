import React from 'react';
import { Row, Col } from 'react-bootstrap'
import ProgramDevCards from './presentational/ProgramDevCards';
import ProgramSlides from './presentational/ProgramSlides';
import ProgramTable from './presentational/ProgramTable';
import academic_success_icon from '/Users/mattsewell/Development/pathsmentorship/frontend/paths-mentorship/src/assets/program_cards/academic_success_icon.png'
import career_exploration_icon from '/Users/mattsewell/Development/pathsmentorship/frontend/paths-mentorship/src/assets/program_cards/career_exploration_icon.png'
import college_app_icon from '/Users/mattsewell/Development/pathsmentorship/frontend/paths-mentorship/src/assets/program_cards/college_app_icon.png'
import college_readiness_icon from '/Users/mattsewell/Development/pathsmentorship/frontend/paths-mentorship/src/assets/program_cards/college_readiness_icon.png'
import summer_jobs_icon from '/Users/mattsewell/Development/pathsmentorship/frontend/paths-mentorship/src/assets/program_cards/summer_jobs_icon.png'
import wellness_check_icon from '/Users/mattsewell/Development/pathsmentorship/frontend/paths-mentorship/src/assets/program_cards/wellness_check_icon.png'
import ProgramBadges from './presentational/ProgramBadges';
import ActionPotentialInitiative from './presentational/ActionPotentialInitiative';
// import Scrollspy from 'react-scrollspy';
import TopicsScheduleCards from './presentational/TopicsScheduleCards';

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
const career_seminars_cards_info = [
    {title: "Travel Nurse", 
        bullets: [
            "Katie Andrusaitis, RN, BSN",
            "DNP Student, Arizona State University"
        ]},
    {title: "Speech Language Pathologist",
        bullets: [
            "Dan Ginat, MA, CCC, SLP", 
            "Cajon Valley Union School District",
            "April Scatliffe, MA, CCC, SLP",
            "San Diego Unified School District"
        ]},
    {title: "Clinical Athletic Trainer",
        bullets: [
            "Monica Macchiarulo", 
            "Duke University Orthopedic Surgery"
        ]},
    {title: "Child Psychiatrist",
        bullets: [
            "Meghan Schott, DO", 
            "Children's National Hospital"
        ]},
    {title: "EMT",
        bullets: [
            "Daniel Carrera, BS", 
            "EMT and medical student, UCLA"
        ]}, 
    {title: "Public Health",
        bullets: [
            "Tooka Zokaie, MPH, CPH", 
            "Preventative Health Manager, American Dental Association"
        ]}, 
    {title: "Neurosurgeon",
        bullets: [
            "Kareem Zaghloul, MD, PhD", 
            "National Institutes of Health"
        ]}, 
    {title: "Physical Therapist",
        bullets: [
            "Kristen Quinn, DPT", 
            "Neurologic Physical Therapy Specialist"
        ]}, 
    {title: "Oral Surgery Assistant",
        bullets: [
            "Jessica Aranibar, AS"
        ]}, 
    {title: "Nobel Prize Winning Scientist",
        bullets: [
            "Jennifer Doudna, PhD", 
            "Professor of Biochemistry, UC Berkeley",
            "Nobel Prize Winner in Chemistry, 2020"
        ]}  
]
const topics_schedule_cards_info = [
    {date: "November", topic: "Question"},
    {date: "December", topic: "Hypothesis"},
    {date: "January", topic: "Experiment"},
    {date: "February", topic: "Data + Analyze"},
    {date: "March", topic: "Report"},
    {date: "April", topic: "Science Project Day"},
]
let count = 0;
export default function Program() {
  return (
    <div className="container">
        <h1>Programs</h1>
        <Row >
            <ProgramSlides />
        </Row>
        {/* <Scrollspy items={ ['section-1', 'section-2', 'section-3'] } currentClassName="is-current">
            <li><a href="#section-1">section 1</a></li>
        </Scrollspy> */}
        
        <br></br>
        <Row>
            <ProgramTable />
        </Row>
        <hr></hr><br></br>
        <Row>
            <h2><strong>2020-2021</strong></h2>
        </Row>
        <br></br>

        {/* <section id="section-1">
        </section> */}

        <h4><strong>Development Workshops</strong></h4>
        <hr className="hr-programs"></hr>
        <Row>
            <div className="container">
                <div className="row text-center">
                    <ProgramDevCards card_info={dev_worshops_cards_info} />
                </div>
            </div>
        </Row>

        <hr></hr>
        <h4><strong>Career Seminars</strong></h4>
        <hr className="hr-programs"></hr>
        <br></br>
        {/* <div className="container">
            <div className="row text-center">
                <ProgramCareerCards card_info={career_seminars_cards_info} />
            </div>
        </div> */}
        <Row className="container">
            <ProgramBadges card_info={career_seminars_cards_info} />
        </Row>
        <hr></hr>
        <h4><strong>Action Potential Initiative</strong></h4>
        <hr className="hr-programs"></hr>
        <br></br>
        <Row>
            <ActionPotentialInitiative />
        </Row>
        <br></br>
        <Row className="justify-content-center">
            <h4 className="">Topics Schedule</h4>
        </Row>
        <Row className="justify-content-center ">
            <TopicsScheduleCards card_info={topics_schedule_cards_info} />
        </Row>
        <br></br>
        <Row>
            <Col className="col-sm-1 arrow-bullet">➤</Col>
            <Col className="col-sm-10">
                <p>
                    This <strong> new competitive program</strong> will have a separate application process and will be supplemental
                     to the development workshops. <strong> Mentors will serve as a "research advisor"</strong> as students create
                      their own scientific question, collect background information, perform an experiment,
                       and report their findings through a <strong>3-5 page report</strong> and  
                       <strong> poster presentation</strong>.

                </p>
            </Col>
        </Row>
        <Row>
            <Col className="col-sm-1 arrow-bullet">➤</Col>
            <Col className="col-sm-10">
                <p>
                    This could count as <strong> research experience</strong> on a resume, provides 
                    a <strong> writing sample</strong> for 
                    college applications, and prepares students for future research projects.
                </p>
            </Col>
        </Row>
        <Row>
            <Col className="col-sm-1 arrow-bullet">➤</Col>
            <Col className="col-sm-10">
                <p>
                    Students will choose their own topic, and will be <strong>guided through each step of the 
                    scientific method</strong> as they slowly build their project. Students may independently
                    coordinate with their teachers to make the project part of a classroom assignment. 
                    We will encourage students to reach out to their teachers to discuss these options.
                </p>
            </Col>
        </Row>
        <Row>
            <Col className=" arrow-bullet">➤</Col>
            <Col className="col-sm-10">
                <p>
                    The project culminates in a <strong>presentation day </strong>in which students will share 
                    their findings with their peers, parents, and mentors in the form of a poster.
                </p>
            </Col>
        </Row>
    </div>
  )
}
