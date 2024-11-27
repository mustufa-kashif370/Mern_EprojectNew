import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TopCities from '../components/TopCities'
import ExpoBanner from '../components/expocenter/ExpoBanner'
import CenterList from '../components/expocenter/CenterList'


function ExpoCenters() {
  return (
    <>
      <Navbar />
      <ExpoBanner />
      <TopCities />
      <CenterList/>
      <Footer />
    </>
  )
}

export default ExpoCenters