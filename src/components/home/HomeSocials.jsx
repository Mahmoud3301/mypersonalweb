import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function HomeSocials() {
  return (
    <div className='home_socials'>
      <a 
        href="https://www.linkedin.com/in/mahmoud-mansour-928623252/" 
        target='_blank' 
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
      <a 
        href="https://github.com/Mahmoud3301" 
        target='_blank' 
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
    </div>
  )
}

export default HomeSocials
