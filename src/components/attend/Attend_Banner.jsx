import React from 'react'
import "../../assets/css/home.css";
import "../../assets/css/main.css";
import "../../assets/css/style.css";
import bannervector2 from '../../assets/img/bannervector2.png'
import bannervector1 from '../../assets/img/bannervector1.png'
import bannergirls from '../../assets/img/attendbanner.jpg'
import bannerbackground from '../../assets/img/bannerBG.png'
function Attend_Banner() {
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
             {/* Left Content */}
             <div className="col-lg-6 col-md-12 flex_align_center">
               <div className="banner_content_left">
                 {/* <h5>Hello Welcome!!</h5> */}
                 <h3>
                  With Event Sphere <br/> <span>Attend and Explore Events</span>
                 </h3>
                 <h3>
                   In <span>Multiple Cities</span>
                 </h3>
                 <p>
                   From local expos to global trade shows, discover what
                   excites you anytime, anywhere.
                 </p>

                 <div className="bh_btn">
                   <a href="#plan" data-section="plan">
                     Host
                   </a>
                 </div>
               </div>
             </div>

             {/* Right Image Section */}
             <div className="col-lg-6 col-md-12 text-end relative">
               <div>
                 <img
                   src={bannergirls}
                   alt="banner side img"
                   style={{borderRadius:'20px', boxShadow:'5px 5px 90px rgba(221,16,71,0.6)'}}
                 />
                 <img
                   src={bannervector1}
                   alt="vector"
                   className="vector1"
                   
                 />
                 <img
                   src={bannervector2}
                   alt="vector"
                   className="vector2"
                   
                 />
               </div>
             </div>
           </div>
         </div>
       </section>
     </div>
    </>
  )
}

export default Attend_Banner