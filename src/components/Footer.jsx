import React from 'react'
import Facebook from "../assets/img/facebook.png"
import Twitter from "../assets/img/Twitter.png"
import Pritrest from "../assets/img/Pritrest.png"
import Insta from "../assets/img/Insta.png"
import LogoFooter from "../assets/icons/1/ticket.svg"
function Footer() {
   
  return (
    <>
    <footer>
    <div className="bh_footer_wrap" >

      <div className="container">
        <div className="row gy-4 justify-content-center p-60">
          <div className="col-lg-12 col-md-6">
            <div className="bh_footer_first">
              <img src={LogoFooter} alt="logo" className="bh_footer_logo_img" />
              <span className="footer_heading">Event Sphere</span>
              <p className="pb-3">
                Event Sphere is a comprehensive online platform designed to revolutionize the way expos, trade shows, and events are managed. From seamless user authentication to robust dashboards for organizers, exhibitors, and attendees, Event Sphere ensures a streamlined experience for all stakeholders. The platform offers real-time updates, exhibitor profile management, analytics reporting, and more, empowering users to create, participate in, and manage events effortlessly. Whether you're an organizer planning a large-scale expo or an attendee exploring opportunities, Event Sphere is your ultimate event management solution.
              </p>
              <div className="d-flex gap-lg-6 gap-md-3 social_icon">
                <a target="_blank" href="https://www.facebook.com/"><img src={Facebook} alt="fb" /></a>
                <a target="_blank" href="https://twitter.com/"><img src={Twitter}
                    alt="twitter" /></a>
                <a target="_blank" href="https://in.pinterest.com/"><img src={Pritrest}
                    alt="pritrest" /></a>
                <a target="_blank" href="https://www.instagram.com/"><img src={Insta}
                    alt="insta" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="row gy-4 justify-content-center p-60">
        

          <div className="col-lg-6 col-md-6 pt-lg-3 pt-md-2 pt-sm-1">
            <div className="bh_footer_list">
              <h4>Our Services</h4>
              <ul>
                <li><a href="#">Hotels</a></li>
                <li><a href="#"> Seat/Room Booking</a></li>
                <li><a href="#"> Engineering, Industrial Services</a></li>
                <li> <a href="#">Internet Of Things</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 pt-lg-3 pt-md-2 pt-sm-1" >
            <div className="bh_footer_list" >
              <h4>Our Services</h4>
              <ul>
                <li><a href="#">Event Booking</a></li>
                <li><a href="#"> Interactive, Analytics & Insights</a></li>
                <li> <a href="#">Engineering, Industrial Services</a></li>
                <li><a href="#">Internet Of Thing</a>s</li>
              </ul>
            </div>
          </div>
        
        </div>
      </div>

      
    </div>
  </footer>
  <div className="bh_copy_write ">&copy; <span id="year"> </span> <span>Event Sphere</span>.All Right Reserved.</div>
    </>
  )
}

export default Footer