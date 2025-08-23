import React from 'react'
import Me from '../../assets/me1.png'
import CVPage1 from '../../assets/cv1.png'
import CVPage2 from '../../assets/cv2.png'
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
        </div>

        <p className="download-msg">
          If you want to download my CV, visit my{' '}
          <a
            href="https://www.linkedin.com/in/your-linkedin-profile/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>.
        </p>
      </div>
    </div>
  )
}

export default Home
