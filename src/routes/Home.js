import React from 'react'
import Navbar from '../components/Navbar'
import Heroimg from '../components/Heroimg' 
import Footer from '../components/Footer'
import "./HomeStyles.css"
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg/>
      <div className="homefooter">
      <Footer/>
      </div>
    </div>
  )
}

export default Home
