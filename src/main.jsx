import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './nullstyle.css'
import './index.css'

import Header from './header/Header'
import Main from './main/Main'
import MySkills from './mySkills/MySkills'
import MyExperience from './myExperience/MyExperience'
import AboutMe from './aboutMe/AboutMe'
import MyProjects from './myProjects/MyProjects'
import MyTestimonial from './myTestimonial/MyTestimonial'
import Callback from './callback/Callback'
import Footer from './footer/Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Main />
    <MySkills />
    <MyExperience />
    <AboutMe />
    <MyProjects />
    <MyTestimonial />
    <Callback />
    <Footer />
  </StrictMode>,
)
