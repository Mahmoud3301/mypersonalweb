import React from 'react'
import Me from '../../assets/me1.png'
import './home.css'
import HomeSocials from './HomeSocials'

function Home() {

  const handleDownload = () => {
    // رابط الملف من public
    const link = document.createElement('a')
    link.href = '/Mahmoud_CV.pdf'  // الملف موجود في public
    link.download = 'Mahmoud_CV.pdf' // اسم الملف عند التحميل
    document.body.appendChild(link)
    link.click()  // تنفيذ التحميل مباشرة
    document.body.removeChild(link)
  }

  return (
    <div>
      <div className="container home_container">
        <h4>Hello I'm</h4>
        <h1>Mahmoud Saeed</h1>
        <h4 className='text-light'>AI Engineer</h4>

        <div className="btns">
          {/* زر التحميل المباشر */}
          <button className="btn" onClick={handleDownload}>
            Download CV
          </button>

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
