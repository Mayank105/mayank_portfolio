import "./FormsStyles.css"
import React from 'react'

const Forms = () => {
  
  return (
    <div className="form">
      <form action="https://formspree.io/f/moqzlpwb" method="POST" className="contact-inputs">
        <label >Your name</label>
        <input type="text" name="username" ></input>
        <label >Email</label>
        <input name="email" type="email" ></input>
        <label >Subject</label>
        <input type="text" name="subject" ></input>
        <label >Message</label>
       <textarea name="message" placeholder="Type your meassage here" rows="6"></textarea>
       {/* <input type="submit" value="send"/> */}
       <button className="btn" type="submit" >Submit</button>
      </form>
    </div>
  )
}

export default Forms
