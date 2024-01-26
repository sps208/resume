import React, { Component } from 'react'

import "../style/Footer.css"

class Footer extends Component {

render() {
    return(
<div className="Footer container-fluid" >
    <div className="container">
        <hr/>
        <br/>
        <p>
            <span><h4><b>Resume Satrio</b></h4></span>
            <small>Belibis Terusan street, Palmerah,  West Jakarta 11480</small>
            <br/>
            <small>satriops20@gmail.com</small>
            <br/>
            <br/>
            <a href="https://www.instagram.com/satriopss/"><i className="fab fa-instagram-square"></i></a>
            &nbsp;
            <a href="https://www.linkedin.com/in/satrio-prawiro-sumowerdoyo"><i className="fab fa-linkedin"></i></a>
            &nbsp;
            <i className="fas fa-envelope"></i>
        </p>
       <p>
         <small> Copyright &copy; Satrio Prawiro</small>
       </p>
    </div>           
</div>
    )
}

}

export default Footer;