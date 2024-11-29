import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Attend_Form from '../components/attend/Attend_Form'
import Attend_Banner from '../components/attend/Attend_Banner'

function Attend() {
  return (
    <>
    <Navbar/>
    <Attend_Banner/>
    <Attend_Form/>
    <Footer/>
    </>
  )
}

export default Attend