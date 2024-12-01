import React, { useState } from "react";
import "../../assets/css/home.css";
import "../../assets/css/main.css";
import "../../assets/css/style.css";
import joinus from "../../assets/img/joinus.png";
import ourmission from "../../assets/img/ourmission.png";
import whoarewe from "../../assets/img/whoarewe.png";
import bannerbackground from "../../assets/img/serviceBG.png";
function About_Details() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What are the comprehensive features?",
      answer: "All the tools you need in one place.",
    },
    {
      question: "How is the design user-centric?",
      answer: "Simple and intuitive for all user levels.",
    },
    {
      question: "Is EventSphere scalable?",
      answer: "Perfect for small gatherings to large-scale expos.",
    },
    {
      question: "What kind of real-time updates are provided?",
      answer: "Stay informed about every detail of your event.",
    },
    {
      question: "How does EventSphere use data-driven insights?",
      answer: "Leverage powerful analytics for smarter decision-making.",
    },
  ];
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
            <div className="row gy-4 justify-content-center p-0">
              <div className="col-lg-6 col-md-12 text-end relative">
                <div>
                  <img
                    src={whoarewe}
                    alt="banner side img"
                    style={{
                      borderRadius: "30px",
                    }}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 flex items-center justify-center about_waw">
                <div className="banner_content_left text-center">
                  <h3 className="text-4xl font-bold">
                    Who <span> We</span>
                    <span
                      style={{
                        fontSize: "38px",
                        fontWeight: "800",
                        color: "black",
                        paddingBottom: "10px",
                        paddingLeft: "10px",
                      }}
                    >
                      Are
                    </span>
                    <span>?</span>
                  </h3>
                  <p className="text-lg text-gray-600 leading-7 mt-4">
                    EventSphere Management is your all-in-one solution for
                    seamless event planning, management, and participation.
                    Designed for expos and trade shows, we bridge the gap
                    between organizers, exhibitors, and attendees, creating a
                    dynamic ecosystem for effortless collaboration and unmatched
                    event experiences.
                  </p>
                </div>
              </div>
            </div>
            <hr
              style={{
                width: "50%",
                borderWidth: "3px",
                borderColor: "darkmagenta",
                marginBottom: "30px",
              }}
            />

            <div className="row gy-4 justify-content-center p-0 ">
              <div className="col-lg-6 col-md-12  items-center justify-center about_waw">
                <div className="banner_content_left text-center">
                  <h3 className="text-4xl font-bold">
                    Our <span> Miss</span>
                    <span
                      style={{
                        fontSize: "38px",
                        fontWeight: "800",
                        color: "black",
                        paddingBottom: "10px",
                      }}
                    >
                      ion
                    </span>
                    <span>.</span>
                  </h3>
                  <p className="text-lg text-gray-600 leading-7 mt-4">
                    To revolutionize event management by providing an
                    innovative, user-friendly platform that empowers organizers,
                    exhibitors, and attendees to connect, collaborate, and
                    succeed in creating memorable events.
                  </p>
                </div>
                <div className="banner_content_left text-center">
                  <h3 className="text-4xl font-bold">
                    Our <span> Visi</span>
                    <span
                      style={{
                        fontSize: "38px",
                        fontWeight: "800",
                        color: "black",
                        paddingBottom: "10px",
                      }}
                    >
                      on
                    </span>
                    <span>.</span>
                  </h3>
                  <p className="text-lg text-gray-600 leading-7 mt-4">
                    To be the global leader in event management technology,
                    fostering growth and success for businesses, organizations,
                    and individuals worldwide.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 text-end relative">
                <div>
                  <img
                    src={ourmission}
                    alt="banner side img"
                    style={{
                      borderRadius: "30px",
                    }}
                  />
                </div>
              </div>
            </div>
            <hr
              style={{
                width: "50%",
                borderWidth: "3px",
                borderColor: "darkmagenta",
                marginBottom: "60px",
                marginTop: "60px",
              }}
            />
            <div className="row gy-4 justify-content-center p-0">
              <div className="col-lg-6 col-md-12 text-end relative">
                <div>
                  <img
                    src={joinus}
                    alt="banner side img"
                    style={{
                      borderRadius: "30px",
                    }}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 flex items-center justify-center about_waw">
                <div className="banner_content_left text-center">
                  <h3 className="text-4xl font-bold">
                    Join <span> Us</span>
                    {/* <span
                      style={{
                        fontSize: "38px",
                        fontWeight: "800",
                        color: "black",
                        paddingBottom: "10px",
                        paddingLeft: "10px",
                      }}
                    >
                      Are
                    </span>
                    <span>?</span> */}
                  </h3>
                  <p className="text-lg text-gray-600 leading-7 mt-4">
                    Be part of the revolution in event management. Whether
                    you’re an organizer, exhibitor, or attendee, EventSphere
                    Management is here to make your journey extraordinary.
                  </p>
                </div>
              </div>
            </div>
            <hr
              style={{
                width: "100%",
                borderWidth: "3px",
                borderColor: "darkmagenta",
                marginBottom: "60px",
                marginTop: "60px",
              }}
            />
            <div className="row gy-4 justify-content-center p-0">
              <div className="col-lg-12 col-md-12  items-center justify-center about_waw">
                <div className="banner_content_left ">
                  <h3 className="text-4xl font-bold text-center mb-4">
                    Why <span> To</span>
                    <span
                      style={{
                        fontSize: "38px",
                        fontWeight: "800",
                        color: "black",
                        paddingBottom: "10px",
                        paddingLeft: "10px",
                      }}
                    >
                      Choose
                    </span>
                    <span> Us.</span>
                  </h3>
                  <div className="container mx-auto max-w-6xl">
                    <div className="space-y-4">
                      {faqItems.map((item, index) => (
                        <div
                          key={index}
                          className="bg-white shadow-md p-4 rounded-lg"
                        >
                          <button
                            onClick={() => toggleFAQ(index)}
                            className="flex justify-between items-center w-full text-left"
                          >
                            <h4 className="text-xl font-semibold text-gray-700">
                              {item.question}
                            </h4>
                            <span className={
                                  openIndex === index
                                    ? "text-red-500"
                                    : "text-green-500"
                                }
                                style={{
                                fontSize: '20px',
                                fontWeight: '900'
                                }}>
                             {openIndex === index ? "-" : "+"}
                            </span>
                          </button>
                        
                          {openIndex === index && (
                            <p className="mt-2 text-gray-600 transition-all duration-300">
                                  <hr
              style={{
                width: "40%",
                borderWidth: "3px",
                borderColor: "darkmagenta",
                marginBottom: "30px",
              }}
            />
                              {item.answer}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default About_Details;
