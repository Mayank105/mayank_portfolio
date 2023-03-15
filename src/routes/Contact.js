import React from 'react'
import Navbar from '../components/Navbar'

import "./ContactStyles.css"
import Footer from '../components/Footer'
import Heroimg2 from '../components/Heroimg2'
import Forms from '../components/Forms'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <div className="contact-backgroundimg">
           <Heroimg2  heading="CONTACT US" text="Let's get connected"/>
           <div className="heading-text"> </div>
      </div>

      <Forms/>
      <div className="contactfooter"><Footer/></div>
      
    </div>
  )
}

export default Contact
