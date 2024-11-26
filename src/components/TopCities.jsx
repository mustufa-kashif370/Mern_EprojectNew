import React from 'react'
import mazarequaid from "../assets/img/mazarequaid.png";
import fasialmosque from "../assets/img/fasialmosque.png";
import minarepakistan from "../assets/img/minarepakistan.png";
import BabeKhyber from "../assets/img/Bab-e-Khyber.jpg";
import quetta from "../assets/img/quetta.jpg";
import multan from "../assets/img/multan.jpg";
function TopCities() {
  return (
    <>
     <section id="plan" className="layout-pt-xl layout-pb-xl plan">
    <div data-anim-wrap className="container">
      <div className="bh_service_head">
        {/* <div className="bh_ser_top">Expo Centers</div> */}
        <h3>Top Expo Cities</h3>
      </div>
      <div data-anim-child="slide-up" className="row justify-between items-end y-gap-10">
        <div className="col-auto">
          <h2 className="text-30 ">Trending Destinations</h2>
        </div>
      </div>
      <div className="grid -type-2 pt-40 sm:pt-20">
        <a href="#" data-anim-child="slide-up delay-1"
          className="featureCard -type-1 overflow-hidden rounded-12 px-30 py-30 -hover-image-scale is-in-view">
          <div className="featureCard__image -hover-image-scale__image">
            <img src={mazarequaid} alt="image"/>
          </div>
          <div className="featureCard__content">
            <h4 className="text-white">
              Karachi
            </h4>
          </div>
        </a>
        <a href="#" data-anim-child="slide-up delay-2"
          className="featureCard -type-1 overflow-hidden rounded-12 px-30 py-30 -hover-image-scale is-in-view">
          <div className="featureCard__image -hover-image-scale__image">
            <img src={fasialmosque} alt="image"/>
          </div>
          <div className="featureCard__content">
            <h4 className="text-white">
              Islamabad
            </h4>
          </div>
        </a>
        <a href="#" data-anim-child="slide-up delay-3"
          className="featureCard -type-1 overflow-hidden rounded-12 px-30 py-30 -hover-image-scale is-in-view">
          <div className="featureCard__image -hover-image-scale__image">
        <img src={minarepakistan} alt="image"/>
          </div>
          <div className="featureCard__content">
            <h4 className="text-white">
              Lahore
            </h4>
          </div>
        </a>
        <a href="#" data-anim-child="slide-up delay-4"
          className="featureCard -type-1 overflow-hidden rounded-12 px-30 py-30 -hover-image-scale is-in-view">
          <div className="featureCard__image -hover-image-scale__image">
            <img src={BabeKhyber}alt="image"/>
          </div>
          <div className="featureCard__content">
            <h4 className="text-white">
              Peshawar
            </h4>
          </div>
        </a>
        <a href="#" data-anim-child="slide-up delay-5"
          className="featureCard -type-1 overflow-hidden rounded-12 px-30 py-30 -hover-image-scale is-in-view">
          <div className="featureCard__image -hover-image-scale__image">
            <img src={quetta} alt="image"/>
          </div>
          <div className="featureCard__content">
            <h4 className="text-white">
              Quetta
            </h4>
          </div>
        </a>
        <a href="#" data-anim-child="slide-up delay-6"
          className="featureCard -type-1 overflow-hidden rounded-12 px-30 py-30 -hover-image-scale is-in-view">
          <div className="featureCard__image -hover-image-scale__image">
            <img src={multan} alt="image"/>
          </div>
          <div className="featureCard__content">
            <h4 className="text-white">
              Multan
            </h4>
          </div>
        </a>
      </div>
    </div>
  </section>
    </>
  )
}

export default TopCities