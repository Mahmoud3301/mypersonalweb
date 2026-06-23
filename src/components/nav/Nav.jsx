import React, { useState } from 'react'
import './nav.css'

// Icons
import { IoHome } from "react-icons/io5";                  // بيت واضح
import { FaUserAlt } from "react-icons/fa";               // مستخدم
import { FaBookOpen } from "react-icons/fa";              // كتاب مفتوح (CV / About)
import { MdHomeRepairService } from "react-icons/md";     // Services
import { MdOutlineContactMail } from "react-icons/md";    // Contact

function Nav() {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a 
        href="#" 
        className={activeNav === "#" ? "active" : ""} 
        onClick={() => setActiveNav('#')}
      >
        <IoHome />
      </a>

      <a 
        href="#about" 
        className={activeNav === "#about" ? "active" : ""} 
        onClick={() => setActiveNav('#about')}
      >
        <FaUserAlt />
      </a>

      <a 
        href="#services" 
        className={activeNav === "#services" ? "active" : ""} 
        onClick={() => setActiveNav('#services')}
      >
        <FaBookOpen />
      </a>

      <a 
        href="#projects" 
        className={activeNav === "#projects" ? "active" : ""} 
        onClick={() => setActiveNav('#projects')}
      >
        <MdHomeRepairService />
      </a>

      <a 
        href="#contact" 
        className={activeNav === "#contact" ? "active" : ""} 
        onClick={() => setActiveNav('#contact')}
      >
        <MdOutlineContactMail />
      </a>
    </nav>
  )
}

export default Nav;
