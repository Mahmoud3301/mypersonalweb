import React from 'react'
import Me from '../../assets/me1.png'
import CVPage1 from '../../assets/cv1.png'
import CVPage2 from '../../assets/cv2.png'
import CVPage3 from '../../assets/cv3.png'
import './home.css'
import HomeSocials from './HomeSocials'

function Home() {
  const scrollToCV = () => {
    const cvSection = document.getElementById('cv-section')
    if (cvSection) {
      cvSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const openImage = (img) => {
    window.open(img, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="home">
      {/* ===== Home Section ===== */}
      <div className="container home_container">
        <h4>Hello I'm</h4>
        <h1>Mahmoud Saeed</h1>
        <h4 className='text-light'>AI Engineer</h4>

        <div className="btns">
          <button className="btn btn-black" onClick={scrollToCV}>
            View CV
          </button>
          <a href="#contact" className="btn btn-yellow">Let's Talk</a>
        </div>

        <div className="me">
          <img src={Me} alt="Me" />
        </div>

        <HomeSocials />
      </div>

      {/* ===== CV Section ===== */}
      <div id="cv-section" className="cv-section">
        <h2>My CV</h2>
        <div className="cv-cards">
          <div className="cv-card" onClick={() => openImage(CVPage1)}>
            <h3>Page 1</h3>
            <img src={CVPage1} alt="CV Page 1" />
          </div>
          <div className="cv-card" onClick={() => openImage(CVPage2)}>
            <h3>Page 2</h3>
            <img src={CVPage2} alt="CV Page 2" />
          </div>
          <div className="cv-card" onClick={() => openImage(CVPage3)}>
            <h3>Page 3</h3>
            <img src={CVPage3} alt="CV Page 3" />
          </div>
        </div>

        {/* Download Button */}
        <div className="download-btn">
          <a
            href="https://drive.google.com/file/d/110u61oRrM64G2kblgUToNPoIMKmuDmif/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-black"
          >
            Download CV
          </a>
        </div>

        <p className="download-msg">
          If you want to visit my{' '}
          <a
            href="https://www.linkedin.com/in/mahmoud-mansour-928623252/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{' '}
          to see my skills and{' '}
          <a
            href="https://github.com/Mahmoud3301"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{' '}
          to see my projects.
        </p>

      </div>
    </div>
  )
}

export default Home
