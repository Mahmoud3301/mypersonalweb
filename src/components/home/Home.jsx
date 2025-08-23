import React from 'react'
import Me from '../../assets/me1.png'
import './home.css'
import HomeSocials from './HomeSocials'
 

function Home() {
  return (
    <div>
      <div className="container home_container">
        <h4>Hello I'm</h4>
        <h1>Mahmoud Saeed</h1>
        <h4 className='text-light'>AI Engineer</h4>

        <div className="btns">
          {/* هنا هيشتغل على أي جهاز */}
          <a href="/Mahmoud_CV.pdf" className="btn" download>
            Download CV
          </a>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>

        <div className="me">
          <img src={Me} alt="Me" />  
        </div>
 
        <a href="#about" className='scroll_down'>Scroll Down</a>

        <HomeSocials />
      </div>
    </div>
  )
}

export default Home