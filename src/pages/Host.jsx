import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Host_Banner from '../components/host/Host_Banner'
import Host_Form from '../components/host/Host_From'

function Host() {
  return (
    <>
    <Navbar/>
    <Host_Banner/>
    <Host_Form/>
    <Footer/>
    </>
  )
}

export default Host