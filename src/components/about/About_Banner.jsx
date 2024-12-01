import React from "react";
import "../../assets/css/home.css";
import "../../assets/css/main.css";
import "../../assets/css/style.css";
import bannervector2 from "../../assets/img/bannervector2.png";
import bannervector1 from "../../assets/img/bannervector1.png";
import Events2 from "../../assets/img/about2.png";
import bannerbackground from "../../assets/img/bannerBG.png";
function Event_Banner() {
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
                  Discover <span> Event Sphere</span>
                  </h3>
                  <h3>
                  Connections, Experiences, 
                    <span>and Events Worldwide</span>
                  </h3>
                  <p>
                  
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
                    style={{
                      borderRadius: "30px",
                    }}
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

export default Event_Banner;
