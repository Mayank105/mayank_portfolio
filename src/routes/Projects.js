
import Navbar from '../components/Navbar'
import "./ProjectsStyles.css"

import Footer from '../components/Footer'
import Heroimg2 from '../components/Heroimg2'
import React from 'react'
// import Cards from '../components/Cards'
import Work from '../components/Work'

const Projects = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="PROJECTS" text="These are some of my recent projects"/>
      <Work/>
      {/* <Cards/> */}
      <div className="projectfooter">
      <Footer/>
      </div>
    </div>

  )
}

export default Projects
