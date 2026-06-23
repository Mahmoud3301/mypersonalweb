import React from 'react'
import './about.css'
import IMageME from '../../assets/Mahmoud.png'
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
              <h5>AI & Flutter Engineering</h5>
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
              <small>10+ Projects</small>
            </div>
          </div>

          <p>
I’m Mahmoud Saeed, a Computer Science and AI graduate from Pharos University in Alexandria with a 3.7 CGPA. I have hands-on experience building projects across computer vision, deep learning, natural language processing, and mobile application development. My work includes self-driving systems, traffic sign recognition, and face mask detection. I also have experience in NLP-based solutions such as chatbots and retrieval-augmented generation (RAG) systems. In mobile development, I have built applications such as a Flutter-based X-O (Tic-Tac-Toe) game and The Guardian app.
I am passionate about artificial intelligence and its real-world applications, and I am always eager to keep learning, building, and contributing to impactful solutions.          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
