import EventBG from "../../assets/img/serviceBG.png";
import ComsumerTradeShow from "../../assets/img/exhibition.jpg";
import IndustryTradeShows from "../../assets/img/IndustryTradeShows.jpg";
import MixedAudienceExpos from "../../assets/img/MixedAudienceExpos.jpg";
import RegionalTradeShows from "../../assets/img/RegionalTradeShows.jpg";
import VirtualandHybridTradeShows from "../../assets/img/VirtualandHybridTradeShows.jpg";
import ArtsandCraftsIndustryExpos from "../../assets/img/ArtsandCraftsIndustryExpos.jpg";
import previous from "../../assets/img/previous.png";
import next from "../../assets/img/next.png";
function Events_Slider() {
    return (
      <>
        <section id="service">
            
          <div
            className="bh_service_wrapper"
            style={{ backgroundImage: `url(${EventBG})` }}
          >
            <div className="bh_service_head">
          {/* <div className="bh_ser_top">Events</div> */}
          <h3>Top Events</h3>
        </div>
            <div className="container">
              <div id="eventCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row gy-4 justify-content-center">
                      <div className="col-lg-4 col-md-6">
                        <div className="bh_service_box">
                          <div className="bh_serv_imgs_wrap">
                            <img
                              src={ComsumerTradeShow}
                              className="d-block w-100"
                              alt="Image showing exhibition at a trade show"
                            />
                          </div>
                          <h4>Consumer Trade Shows</h4>
                          <p>
                            These expos are designed exclusively for the public. Companies unveil their latest
                            products or services, allowing consumers to engage directly. Through live demonstrations
                            and interactive booths, attendees get a feel for what’s new in the market. On the flip side,
                            businesses get a chance to gauge public reaction and gather feedback, crucial for product
                            refinement and marketing strategies.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="bh_service_box">
                          <div className="bh_serv_imgs_wrap">
                            <img
                              src={IndustryTradeShows}
                              className="d-block w-100"
                              alt="Image showing industry trade show event"
                            />
                          </div>
                          <h4>Industry Trade Shows</h4>
                          <p>
                            Tailored for professionals within a specific field, these events focus on B2B interactions.
                            Businesses showcase their latest innovations, hoping to capture the attention of potential
                            partners or investors. These events become a hub for industry insiders, fostering
                            connections, collaborations, and industry-wide advancements.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="bh_service_box">
                          <div className="bh_serv_imgs_wrap">
                            <img
                              src={MixedAudienceExpos}
                              className="d-block w-100"
                              alt="Image showing mixed audience expo"
                            />
                          </div>
                          <h4>Mixed Audience Expos</h4>
                          <p>
                            Striking a balance, these expos cater to both consumers and industry professionals. They
                            serve a dual purpose: unveiling products to the public while also facilitating B2B
                            collaborations. Such a blend ensures a wider reach and diverse engagement, benefiting both
                            exhibitors and attendees in various ways.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="carousel-item">
                    <div className="row gy-4 justify-content-center">
                      <div className="col-lg-4 col-md-6">
                        <div className="bh_service_box">
                          <div className="bh_serv_imgs_wrap">
                            <img
                              src={RegionalTradeShows}
                              className="d-block w-100"
                              alt="Image showing regional trade show"
                            />
                          </div>
                          <h4>Regional Trade Shows</h4>
                          <p>
                            Regional trade shows are smaller in scale than national or international events but are
                            just as significant. These trade show examples are tailored to the specific needs,
                            interests, and industries of a particular region, making them more accessible to local
                            businesses and attendees. They can be industry-specific or cater to a broader audience.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="bh_service_box">
                          <div className="bh_serv_imgs_wrap">
                            <img
                              src={VirtualandHybridTradeShows}
                              className="d-block w-100"
                              alt="Image showing virtual and hybrid trade show"
                            />
                          </div>
                          <h4>Virtual and Hybrid Trade Shows</h4>
                          <p>
                            Virtual and hybrid trade shows have emerged as innovative solutions to connect businesses
                            and consumers across the world. While virtual events are entirely online, hybrid shows
                            blend the best of both worlds: the buzz of in-person connections and the limitless reach of
                            the digital realm.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6">
                        <div className="bh_service_box">
                          <div className="bh_serv_imgs_wrap">
                            <img
                              src={ArtsandCraftsIndustryExpos}
                              className="d-block w-100"
                              alt="Image showing arts and crafts industry expo"
                            />
                          </div>
                          <h4>Arts and Crafts Industry Expos</h4>
                          <p>
                            Artists from every medium – pottery, jewelry, and other crafts – are always looking for
                            ways to connect to industry influencers and purchasers and learn about new trends and design
                            products. That’s why there are hundreds of different arts and crafts trade shows to choose
                            from across the United States.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  
              <button className="carousel-control-prev" type="button" data-bs-target="#eventCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon">
          <img src={previous} />
        </span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#eventCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true">
          <img src={next}/>
        </span>
        <span className="visually-hidden">Next</span>
      </button>
            </div>
          </div>
        </section>
      </>
    );
  }
  
  export default Events_Slider;
  