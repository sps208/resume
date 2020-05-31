import React, { Component } from 'react';

import About from './component/About'
import Skill from './component/Skill'
import Education from './component/Education'
import Footer from './component/Footer'
import './style/App.css'
import ScrollReveal from 'scrollreveal'

class App extends Component {

  componentDidMount() {
    const config1 = {
      origin: 'bottom',
      duration: 1000,
      delay: 150,
      distance: '100px',
      scale: 1,
      easing: 'ease'
    };

    const config2 = {
      origin: 'right',
      duration: 1000,
      delay: 800,
      distance: '100px',
      scale: 1,
      easing: 'ease'
    };
    const config3 = {
      origin: 'left',
      duration: 1000,
      delay: 0,
      distance: '100px',
      scale: 1,
      easing: 'ease'
    };
    const config32 = {
      origin: 'left',
      duration: 1000,
      delay: 800,
      distance: '100px',
      scale: 1,
      easing: 'ease'
    };
    const config4 = {
      duration: 1000,
      delay: 500,
      scale: 1,
      easing: 'ease'
    };

    ScrollReveal().reveal('.first', config3)
    ScrollReveal().reveal('.second', config32)
    ScrollReveal().reveal('.aboutDesc', config2)
    ScrollReveal().reveal('.Header', config4)
    ScrollReveal().reveal('.myskill', config4)
    ScrollReveal().reveal('.stepperAnimation', config1)
    }


render() {
  return (
    <div className="App">
     
        <About/>

        <Skill/>

        <Education/>

        <Footer/>
    </div>
     
  )
}

}

export default App;
