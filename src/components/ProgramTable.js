import React from 'react';
import { Table } from 'react-bootstrap';

const ProgramTable = () =>
{
    return (

        <Table>
            <tbody>
                <tr>
                <td><strong>Mentorship</strong></td>
                <td>
                    Students are paired with local working professionals based on common interests. 
                    Mentors meet with students regularly to provide professional and academic support.
                </td>
                </tr>
                <tr>
                <td><strong>Development Workshops</strong></td>
                <td>
                    Helps students develop the skills required to succeed in college and in academic/professional environments
                </td>
                </tr>
                <tr>
                <td ><strong>Action Potential Initiative</strong></td>
                <td>
                    As part of the Action Potential Initiative, students optionally develop a scientific research question and carry out a small research project. 
                    They are led through the scientific method and guided through the project by their mentor. Students must apply to participate in this part of the program.
                </td>
                </tr>
                <tr>
                <td ><strong>Career Seminars</strong></td>
                <td>
                    Working professionals present to students about their careers, sharing the day to day life and steps necessary 
                    to reach their career. Emphasis on non-typical health-related careers.
                </td>
                </tr>
            </tbody>
        </Table>
    )

}
export default ProgramTable;