import React from 'react';
import { Row } from 'react-bootstrap'
import ProgramDevCards from './presentational/ProgramDevCards';
import ProgramCareerCards from './presentational/ProgramCareerCards';
import ProgramSlides from './presentational/ProgramSlides';
import ProgramTable from './presentational/ProgramTable';
import academic_success_icon from '/Users/mattsewell/Development/pathsmentorship/frontend/paths-mentorship/src/assets/program_cards/academic_success_icon.png'
import career_exploration_icon from '/Users/mattsewell/Development/pathsmentorship/frontend/paths-mentorship/src/assets/program_cards/career_exploration_icon.png'
import college_app_icon from '/Users/mattsewell/Development/pathsmentorship/frontend/paths-mentorship/src/assets/program_cards/college_app_icon.png'
import college_readiness_icon from '/Users/mattsewell/Development/pathsmentorship/frontend/paths-mentorship/src/assets/program_cards/college_readiness_icon.png'
import summer_jobs_icon from '/Users/mattsewell/Development/pathsmentorship/frontend/paths-mentorship/src/assets/program_cards/summer_jobs_icon.png'
import wellness_check_icon from '/Users/mattsewell/Development/pathsmentorship/frontend/paths-mentorship/src/assets/program_cards/wellness_check_icon.png'
import ProgramBadges from './presentational/ProgramBadges';
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
    {title: "Speech and Language Pathologist",
        bullets: [
            "Dan Ginat, MA, CCC, SLP", 
            "Cahon Valley Union School District",
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
                <ProgramDevCards card_info={dev_worshops_cards_info} />
            </div>
        </div>
        <hr></hr>
        <Row>
            <h4>Career Seminars</h4>
        </Row>
        {/* <div className="container">
            <div className="row text-center">
                <ProgramCareerCards card_info={career_seminars_cards_info} />
            </div>
        </div> */}
        <Row>
            <ProgramBadges card_info={career_seminars_cards_info} />
        </Row>


    </div>
  )
}
