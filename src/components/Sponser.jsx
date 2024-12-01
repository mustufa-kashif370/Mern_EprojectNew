import React from "react";
import aptechlogo from "../assets/img/aptechlogo2.png"
import aptechcovocation from "../assets/img/aptechcovocation-removebg-preview.png"
import aptechvision from "../assets/img/aptechvision.png"
import aptechtechwiz from "../assets/img/techwiz.jpg"
function Sponser() {
  return (
    <>
      <section id="sponser" style={{marginTop:'40px'}}>
      <div className="bh_service_head">
          {/* <div className="bh_ser_top">Events</div> */}
          <h3>Our Partners</h3>
        </div>
        <div className="bh_sponser">
        
          <div>
            <img
              src={aptechlogo}
              alt="Aptech Logo"
            />
          </div>
          <div>
            <img
              src={aptechcovocation}
              alt="Aptech Convocation Logo"
            />
          </div>
          <div>
            <img
              src={aptechtechwiz}
              alt="TechWiz Logo"
            />
          </div>
          <div>
            <img
              src={aptechvision}
              alt="Aptech Vision Logo"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Sponser;
