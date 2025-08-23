import React from 'react'
import './about.css'
import IMageME from '../../assets/me2.png'
import { FaAward } from "react-icons/fa";
import { GiDiploma } from "react-icons/gi";
import { VscFolderLibrary } from 'react-icons/vsc';

function About() {
  return (
    <section className="about" id="about">
      <div className="top_section">
        <h5>Get To know</h5>
        <h2>About Me</h2>
      </div>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={IMageME} alt="Mahmoud Saeed" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <div className="about_card">
              <FaAward className='about_icon' />
              <h5>Senior AI Engineering Student</h5>
              <small>2+ years experience</small>
            </div>

            <div className="about_card">
              <GiDiploma className='about_icon' />
              <h5>Achieved multiple academic diplomas</h5>
              <small>3+ Diplomas</small>
            </div>

            <div className="about_card">
              <VscFolderLibrary className='about_icon' />
              <h5>Projects</h5>
              <small>6+ Projects</small>
            </div>
          </div>

          <p>
            I’m Mahmoud Saeed, a final-year Computer Science and AI student at Pharos University in Alexandria with a 3.74 CGPA. I’ve built projects in computer vision, deep learning, and mobile apps, including self-driving systems, traffic sign recognition, and face mask detection. Passionate about AI and real-world applications, I’m eager to keep learning and innovating.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
