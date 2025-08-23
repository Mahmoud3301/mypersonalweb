import React from 'react'
import Me from '../../assets/me1.png'
import CV from '../../assets/Mahmoud_CV.pdf' // استيراد ملف الـ CV من src
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
          {/* زر تحميل مضمون على أي جهاز */}
          <a
            href={CV}
            className="btn"
            download="Mahmoud_CV.pdf"
          >
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
