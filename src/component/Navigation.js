import React, { Component } from 'react';

import '../style/Navigation.css'

class Navigation extends Component {
    render() {
        return (
            <div className="Navigation container">
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <a className="nav-link fontNav" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fontNav" href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fontNav" href="#education">Education & Experience</a>
              </li>
            </ul>
            </div>
        )
    }
}

export default Navigation;