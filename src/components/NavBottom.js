import React from 'react';
import {  } from 'react-bootstrap' 

export default function NavBottom() {
  return (
    <div>
      <br></br>
        <div className="footer-dark">
          <footer>
              <div className="container">
                  <div className="row">
                      <div className="col-sm-6 col-md-3 item">
                          <h3>Links</h3>
                          <ul>
                          <li><a href="https://www.instagram.com/biomedmentors/">Instagram</a></li>
                    <li><a href="https://www.instagram.com/biomedmentors/">LinkedIn</a></li>
                          </ul>
                      </div>
                      <div className="col-sm-6 col-md-3 item">
                          <h3>About</h3>
                          <ul>
                              <li><a href="home">Home</a></li>
                              <li><a href="students-parents">Students + Parents</a></li>
                              <li><a href="about">Who we are</a></li>
                              <li><a href="contact">Contact Us</a></li>
                          </ul>
                      </div>
                      <div className="col-md-6 item text">
                          <h3>PATHS Mentorship</h3>
                          <p>Here to help YOU achieve your STEM and Healthcare dreams!</p>
                      </div>
                      {/* <div className="col item social"><a href="#"><i className="icon ion-social-facebook"></i></a><a href="#"><i className="icon ion-social-twitter"></i></a><a href="#"><i className="icon ion-social-snapchat"></i></a><a href="#"><i className="icon ion-social-instagram"></i></a></div> */}
                  </div>
                  <p className="copyright">
                  © 2021. Designed by Matthew Sewell | 
                  <a href="https://github.com/matt5342" style={{color:'blue'}}> Github </a>|
                  </p>
              </div>
          </footer>
      </div>


    </div>
  )
}