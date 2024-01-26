import React, { Component } from 'react';

import '../style/Skill.css'

class Skill extends Component {

    render() {
        return (
            <div id="skills" className="Skill container-fluid" >
                <div className="container">
                    <h2 className="myskill">My Skills:</h2>
                    <p className="myskill">
                        
                        <i class="fab fa-html5"></i>
                        
                        <i class="fab fa-css3-alt"></i>
                        
                        <i class="fab fa-js"></i>
                        
                        <i class="fab fa-react"></i>
                        
                        <i class="fas fa-database"></i>
                        
                        <i class="fab fa-adobe"></i>
                        
                        <i class="fas fa-camera"></i>
                        
                    </p>
                </div>           
            
            </div>
        )
    }
}

export default Skill;