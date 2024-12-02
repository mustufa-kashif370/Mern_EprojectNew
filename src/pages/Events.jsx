import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Events_Slider from '../components/events/Events_Slider'
import Event_Banner from '../components/events/Event_Banner'
import Events_Details from '../components/events/Events_Details'

function Events() {
  return (
    <>
    <Navbar/>
    <Event_Banner/>
    <Events_Slider/><div
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
    <Events_Details/><div
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
    <Footer/>
    </>
  )
}

export default Events