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
    <Events_Slider/>
    <Events_Details/>
    <Footer/>
    </>
  )
}

export default Events