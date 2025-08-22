import React from 'react'
import './footer.css'
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa'

function Footer() {
  return (
    <footer>
      {/* شعارك أو اسمك */}
      <a href="#" className='footer_logo'>Mahmoud Saeed</a>

      {/* روابط الأقسام */}
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* أيقونات التواصل الاجتماعي */}
      <div className="footer_socials">
        <a href="https://www.facebook.com/mahmoud.saeed100452" target='_blank' rel="noreferrer">
          <FaFacebook />
        </a>
        <a href="https://github.com/Mahmoud3301" target='_blank' rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/mahmoud-mansour-928623252/" target='_blank' rel="noreferrer">
          <FaLinkedin />
        </a>
      </div>

      {/* حقوق النشر */}
      <div className="footer_copyright">
        <small>&copy; <a href="#">Mahmoud Saeed</a> All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
