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
      <TopCities /><div
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
      <CenterList/><div
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
      <Footer />
    </>
  )
}

export default ExpoCenters