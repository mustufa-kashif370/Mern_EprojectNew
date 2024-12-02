import React from "react";

function ContactDetails() {
  return (
    <section id="service">
      <div className="bh_service_wrapper">
        <div className="bh_service_head mb-4">
          {/* <div className="bh_ser_top">Events</div> */}
          <span
            style={{
              fontSize: "38px",
              fontWeight: "800",
              color: "#DD1047",
              paddingBottom: "10px",
            }}
          >
            Our Location
          </span>
        </div>
        <div className="container mt-4">
          <div className=" rounded-xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d904.536322060759!2d67.033715!3d24.92712!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f90157042d3%3A0x93d609e8bec9a880!2sAptech%20Computer%20Education%20North%20Nazimabad%20Center!5e0!3m2!1sen!2sus!4v1733161619461!5m2!1sen!2sus"
              width="100%"
              height="500"
              style={{
                border: "2px solid #8C09B",
                borderRadius: "20px",
                visibility: "20px",
              }}
              allowfullscreen=""
              loading="lazy"
              title="map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactDetails;
