import React from 'react'
import Navbar from '../components/Navbar'
import "./AboutStyles.css"


import Footer from '../components/Footer'
// import Heroimg2 from '../components/Heroimg2'
import AboutContant from '../components/AboutContant'

const About = () => {
  return (
    <div>
      <Navbar/>
      <div  className="about-heroimg-background" >
      {/* <Heroimg2 heading="About" text="I'm a Computer Science Student"/> */}
     <img src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y29tcHV0ZXIlMjBzY2llbmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
     <div className="aboutcontents">
     
      <h1>About</h1>
     
      
      <p>I'm a Cybersecurity Graduate Student</p>
      
     </div>
      </div>
      <AboutContant/>
      <div className="aboutfooter" >
    <Footer  />
      </div>
      </div>
      
    
  )
}

export default About
