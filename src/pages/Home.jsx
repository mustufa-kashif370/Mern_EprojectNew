import React from "react";
import Navbar from "../components/Navbar";
import BannerComponents from "../components/BannerComponents";
import Sponser from "../components/Sponser";
import Events_Slider from "../components/events/Events_Slider";
import TopCities from "../components/TopCities";
import ContactForm from "../components/contact/ContactForm";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <BannerComponents />
      <Sponser />
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
      <Events_Slider />
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
      <TopCities />
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
      <ContactForm />
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
      <Footer />
    </>
  );
}

export default Home;
