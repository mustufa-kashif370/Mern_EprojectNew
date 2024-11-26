import React from 'react'
import Navbar from '../components/Navbar'
import BannerComponents from '../components/BannerComponents'
import Sponser from '../components/Sponser'
import Events_Slider from '../components/events/Events_Slider'
import TopCities from '../components/TopCities'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
    
    <Navbar/>
    <BannerComponents/>
    <Sponser/>
    <Events_Slider/>
    <TopCities/>
    <ContactForm/>
    <Footer/>
    </>
  )
}

export default Home