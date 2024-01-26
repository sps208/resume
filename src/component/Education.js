import React, { Component } from 'react';

import '../style/Education.css'

class Education extends Component {
    render() {
        return (
        <div id="education" className="Education row container-fluid">
         <div className="container col-sm eduPosition">
            <div className="mb-5 p-4 shadow-sm">
        <h3 className="stepperAnimation">My Education</h3>
        <div id="stepper4" className="bs-stepper vertical linear stepperAnimation">
        
          <div className="bs-stepper-header Desktop">
          
          
            <div className="step" >
                <span className="bs-stepper-circle"><i class="fas fa-graduation-cap"></i></span>
                
            </div>
            <div className="bs-stepper-line"></div>
            <div className="step">
              
                <span className="bs-stepper-circle"><i class="fas fa-graduation-cap"></i></span>
                
              
            </div>
            <div className="bs-stepper-line"></div>
            <div className="step" data-target="#test-vl-3">
              
                <span className="bs-stepper-circle"><i class="fas fa-graduation-cap"></i></span>
               
            
            </div>
            <div className="bs-stepper-line"></div>
            <div className="step" data-target="#test-vl-3">
              
                <span className="bs-stepper-circle"><i class="fas fa-graduation-cap"></i></span>
               
            
            </div>
            <div className="bs-stepper-lineL"></div>
          </div>
          <div className="bs-stepper-content stepperAnimation">
            <p><br></br></p>

            <h5> Al-Azhar 3 Senior Highschool</h5>
            <p><small>Periode : 2013 - 2016</small></p>
            <p><br></br></p>
            <p><br></br></p>
            <p><br></br></p>
            
            
            <h5> Bina Nusantara University</h5>
            <p><small>Periode : 2016 - 2020</small></p>
            <p><small>Bachelor degree GPA : 3.28 </small></p>
            <p><br></br></p>
            <p><br></br></p>
            

            <h5> Purwadhika Coding School</h5>
            <p><small>Periode : 2020 - 2021</small></p>
            <p><small>Minor : Web and Mobile Apps Development</small></p>
            <p><br></br></p>
            <p><br></br></p>

            <h5> Analitik Data Google Specialization</h5>
            <p><small>Periode : 2022</small></p>

          </div>
        </div>
      </div>
      
      </div>
      <div className="container col-sm eduPosition">
        <div className=" mb-5 p-4 shadow-sm">
        <h3 className="stepperAnimation">My Experience</h3>
        <div id="stepper4" className="bs-stepper vertical linear stepperAnimation Desktop">
          <div className="bs-stepper-header Desktop" role="tablist">
            <div className="step" >
                <span className="bs-stepper-circle"><i class="fas fa-tachometer-alt"></i></span>
                
            </div>
            <div className="bs-stepper-lineX1"></div>
            <div className="step">
              
                <span className="bs-stepper-circle"><i class="fas fa-tachometer-alt"></i></span>
                
              
            </div>
            <div className="bs-stepper-lineX2"></div>
            <div className="step">
              
                <span className="bs-stepper-circle"><i class="fas fa-tachometer-alt"></i></span>
                
              
            </div>
            <div className="bs-stepper-lineX3"></div>
            <div className="step">
              
                <span className="bs-stepper-circle"><i class="fas fa-tachometer-alt"></i></span>
               
            
            </div>
            <div className="bs-stepper-lineX4"></div>
            <div className="step">
              
                <span className="bs-stepper-circle"><i class="fas fa-tachometer-alt"></i></span>
               
            
            </div>
            <div className="bs-stepper-lineX5"></div>
          </div>
          <div className="bs-stepper-content stepperAnimation">
            <p><br></br></p>
            <h5>Freelancer Photographer</h5>
            <p><small>Periode : 2016 - 2018</small></p>
            <p><small>Photograph & photo edit</small></p>

            <p><br></br></p>

            <h5>Activist at Binus Basketball </h5>
            <p><small>Periode : 2016 - 2017</small></p>
            <p><small>Activist Of Creative And Fund Division</small></p>
            <p><small>Periode : 2017 - 2018</small></p>
            <p><small>Coordinator of Public Relation Division</small></p>
            <p><br></br></p>



            <h5>Commitee of Freshmen</h5>
            <h5> Enrichment Program</h5>
            <p><small>Periode : 2018 - 2019</small></p>
            <p><small>Buddy Coordinator</small></p>
            <p><br></br></p>


            <h5>Internship at PT. QPRO</h5>
            <h5>Sukses Mandiri</h5>
            <p><small>Periode : 2019</small></p>
            <p><small>Software Developer</small></p>
            <p><br></br></p>


            <h5>Full Time at PT. Blend</h5>
            <h5>Media Kreasi</h5>
            <p><small>Periode : 2023 - 2024</small></p>
            <p><small>Full-stack Web Developer</small></p>

          </div>
        </div>
      </div>
      
      </div>
      </div>
        )
    }

}

export default Education;