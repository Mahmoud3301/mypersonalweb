import React from 'react'   // 👈 إضافة مهمة
import Home from './components/home/Home'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Footer from './components/footer/Footer'
import Services from './components/services/services'
function App() {
  return (
    <>
      <Home />       {/* الصفحة الرئيسية */}
      <Nav />        {/* شريط التنقل */}
      <About />      {/* نبذة عنك */}
      <Skills />     {/* المهارات */}
      <Services />
      <Projects />   {/* المشاريع */}
      <Contact />    {/* قسم التواصل */}
      <Footer />     {/* نهاية الصفحة */}
    </>
  )
}

export default App
