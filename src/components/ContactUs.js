import React, { useState } from 'react'
import { Axios } from '../firebase/firebaseConfig'
import { Button } from 'react-bootstrap';
const ContactForm = () => {
  const [formData, setFormData] = useState({})

  const emailOptions = [
    "General Question", 
    "Student Question", 
    "Parent Question", 
    "Mentor Question", 
    "Sponsors/Partners", 
    "Career Seminar", 
    "Action Potential Initiative"
  ]

  const updateInput = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = event => {
    event.preventDefault()
    sendEmail()
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }
  const sendEmail = () => {
    Axios.post(
      'https://us-central1-Paths-mentorship.cloudfunctions.net/submit',
      formData
    )
      .catch(error => {
        console.log(error)
      })
  }

  return (
      // <div className="form-box">
      <div style={{paddingBottom: 300}}>
        <style type='text/css'>

        </style>
        <h1>Contact Us</h1>
        <div className='container-fluid'>
          <p>
            Send an email to <a href="mailto:pathsmentorship@gmail.com" target="_blank">pathsmentorship@gmail.com</a> to get in touch!
          </p>
        </div>
        {/* <form onSubmit={handleSubmit}>
          <div className="form-group required">
            <label className="control-label">Name</label>
            <input onChange={updateInput} value={formData.name || ''} className="form-control" type="text" name="name" required="true"/>
          </div>
          <div className="form-group required">
            <label className="control-label">Email</label>
            <input onChange={updateInput} value={formData.email || ''} className="form-control" type="email" name="email" required="true"/>
          </div>
          <div className="form-group required">
            <label className="control-label">Subject</label>
            <select onChange={updateInput} value={formData.subject || ''} className="form-control" type="text" name="subject" required="true">
              <option selected disabled label=" "></option>
              {emailOptions.map((choice) => {
                return (
                  <option value={choice}>{choice}</option>
                )
              })}
            </select>
          </div>
          <div className="form-group required">
            <label className="control-label">Message</label>
            <textarea onChange={updateInput} value={formData.message || ''} className="form-control" name="message" required="true"></textarea>
          </div>
          <Button type="submit">Submit</Button>
        </form> */}
      </div>
  )
}
export default ContactForm

