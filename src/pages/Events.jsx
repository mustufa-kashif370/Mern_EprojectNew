import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Events_Slider from '../components/events/Events_Slider'
import Event_Banner from '../components/events/Event_Banner'

function Events() {
  return (
    <>
    <Navbar/>
    <Event_Banner/>
    <Events_Slider/>
    
    <Footer/>
    </>
  )
}

export default Events