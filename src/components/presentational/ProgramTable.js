import React from 'react';
import { Table } from 'react-bootstrap';
import Scrollspy from 'react-scrollspy';

const ProgramTable = () =>
{
    return (

        <Table>
            <tbody>
            <Scrollspy items={ ['dev-workshops', 'career-seminars', 'action-potential-initative'] } currentClassName="is-current">
                <tr>
                <td><strong>Mentorship</strong></td>
                <td>
                    Students are paired with local working professionals based on common interests. 
                    Mentors meet with students regularly to provide professional and academic support.
                </td>
                </tr>
                <tr>
                <td><strong><a href="#dev-workshops">Development Workshops</a></strong></td>
                <td>
                    Helps students develop the skills required to succeed in college and in academic/professional environments
                </td>
                </tr>
                <tr>
                <td ><strong><a href="#action-potential-initiative">Action Potential Initiative</a></strong></td>
                <td>
                    As part of the Action Potential Initiative, students optionally develop a scientific research question and carry out a small research project. 
                    They are led through the scientific method and guided through the project by their mentor. Students must apply to participate in this part of the program.
                </td>
                </tr>
                <tr>
                <td ><strong><a href="#career-seminars">Career Seminars</a></strong></td>
                <td>
                    Working professionals present to students about their careers, sharing the day to day life and steps necessary 
                    to reach their career. Emphasis on non-typical health-related careers.
                </td>
                </tr>
            </Scrollspy>
            </tbody>
        </Table>
    )

}
export default ProgramTable;