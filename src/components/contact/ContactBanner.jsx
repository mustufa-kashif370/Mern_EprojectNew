import React from "react";
import "../../assets/css/home.css";
import "../../assets/css/main.css";
import "../../assets/css/style.css";
import bannervector2 from "../../assets/img/bannervector2.png";
import bannervector1 from "../../assets/img/bannervector1.png";
import Events2 from "../../assets/img/contactus.png";
import bannerbackground from "../../assets/img/bannerBG.png";
function ContactBanner() {
  return (
    <>
      <div className="first_wrap">
        {/* Banner Section */}
        <section
          id="home"
          className="bh_banner_wrapper"
          style={{
            backgroundImage: `url(${bannerbackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container">
            <div className="row gy-4 justify-content-center p-60">
            <div className="col-lg-6 col-md-12 flex_align_center">
                <div className="banner_content_left">
                  {/* <h5>Hello Welcome!!</h5> */}
                  <h3>
                  Get In<span>  Touch With</span>
                  </h3>
                  <h3>
                  Event Sphere
                    <span> To Experience </span>
                  </h3>
                  <h3>
                  Events
                    <span>. </span>
                  </h3>
                  <p>
                  We’d love to hear from you! Contact us with any questions or inquiries.
                  </p>
                  <div className="bh_btn">
                    <button
                      className="btn btn btn-large buttonattend"
                      href="#plan"
                      data-section="plan"
                    >
                      Attend
                    </button>
                  </div>
                  
                </div>
              </div>

              {/* Right Image Section */}
              <div className="col-lg-6 col-md-12 text-end relative">
                <div>
                  <img
                    src={Events2}
                    alt="banner side img"
                    
                    style={{height:'400px',
                    width:'600px', borderRadius: '30px', boxShadow: '0px 0px 50px rgba(221,16,71,0.5)' }} 
                  />
                  <img src={bannervector1} alt="vector" className="vector1" />
                  <img src={bannervector2} alt="vector" className="vector2" />
                </div>
              </div>
             
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ContactBanner;
