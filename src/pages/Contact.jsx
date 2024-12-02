import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactBanner from '../components/contact/ContactBanner'
import ContactForm from '../components/contact/ContactForm'
import ContactDetails from '../components/contact/ContactDetails'

function Contact() {
  return (
    <>
    <Navbar />
    <ContactBanner/>
    <ContactForm/>
    <div
        className="hrline"
        style={{
          marginLeft: "5px",
          marginRight: "0px",
          height: "3px",
          width: "100%",
          backgroundColor: "darkmagenta",
          opacity: "0.25",
          borderRadius: "50px",
        }}
      ></div>
    <ContactDetails/>
   
    <Footer/>
    </>
  )
}

export default Contact