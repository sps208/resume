import React, { Component } from 'react';

import CV from '../Asset/CV_SatrioPrawiro_Pajakku_compressed.pdf';

import Navigation from './Navigation.js'

import Row from 'react-bootstrap';

import '../style/About.css'

class About extends Component {
  render() {
    return (
      <div id="about" className="Header container-fluid">
        <Navigation />
        <div className="container px-5">
          <div className="row">
            <div className="col-sm intro" >
              <div>
                <h1 className="display-4 first"> <span className="im"> &nbsp;Hi, i'm &nbsp;</span></h1>
                <h1 className="display-4 second name">SATRIO PRAWIRO S!</h1>
                <i className="fas fa-minus icon-minus second"></i>
              </div>
              <div className="three-icon second">
                <a href="https://www.instagram.com/satriopss/"><i className="fab fa-instagram-square"></i></a>
                &nbsp;
                <a href="www.linkedin.com/in/satrio-prawiro-sumowerdoyo"><i className="fab fa-linkedin"></i></a>
                &nbsp;
                <i className="fas fa-envelope"></i>
              </div>
            </div>
            <div className="col-sm aboutDesc">
              <row>
                <h2>
                  About Me
                </h2>
                <p>
                  Born on 21 April 1998, Jakarta, Indonesia. Daring to learn something new with high dedication, very active and easy going person to interact and communicate with, high competitive spirit. And I like to play basketball, soccer, and brew a coffee as a hobby.
                </p>
                <row>
                  <h1>&nbsp;</h1>
                </row>
              </row>
              <row className="buttonS">
                <a href={CV}>
              <button className="CVbutton"><strong>Download My CV here!</strong></button>
                </a>
              </row>
            </div>
          </div>
        </div>
      </div>

      
    )
  }
}



export default About;
