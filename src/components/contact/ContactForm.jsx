import React from 'react';
import ConatactBG from "../../assets/img/serviceBG.png";
import contact_bg from "../../assets/img/contact_bg.png";
function ContactForm() {
  return (
    <>
      <section id="contact">
        <div
          className="bh_contact_wrapper"
          style={{ backgroundImage: `url(${ConatactBG})` }}
        >
          <div className="container">
            <div className="bh_service_head">
              <div className="bh_ser_top">Contact Us</div>
              <h3>Get in Touch with Event Sphere</h3>
            </div>
          </div>

          <div className="container p-60">
            <div className="bh_contact_form_wrapper">
              <div className="row gy-4 justify-content-center" id="plan_div">
                <div className="col-lg-5 col-md-6">
                  <div
                    style={{ backgroundImage: `url(${contact_bg})` }}
                    className="first_wrap"
                  >
                    <div className="contact_detail">
                      <h4>Have questions or need assistance?</h4>
                      <p>
                        At Event Sphere, we &apos; re here to help you simplify your event management
                        journey. Whether you &apos; re an organizer planning a grand expo, an exhibitor
                        showcasing your brand, or an attendee exploring opportunities, our team is
                        ready to support you. Reach out to us for inquiries, feedback, or technical
                        assistance, and let us make your event experience exceptional.
                      </p>
                      <div className="con_info">
                        <svg
                          width="21"
                          height="16"
                          viewBox="0 0 21 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.66017 0.927901L7.87254 7.14297C9.22747 8.4953 11.4423 8.49647 12.7984 7.14297L19.0107 0.927901C19.0254 0.913298 19.0367 0.895641 19.0438 0.876184C19.0509 0.856726 19.0537 0.835944 19.0518 0.815311C19.05 0.794678 19.0437 0.7747 19.0333 0.756792C19.0229 0.738885 19.0086 0.723487 18.9916 0.71169C18.358 0.26979 17.587 0.0078125 16.7566 0.0078125H3.91435C3.08386 0.0078125 2.31293 0.269835 1.6793 0.71169C1.66227 0.723487 1.64805 0.738885 1.63764 0.756792C1.62723 0.7747 1.62089 0.794678 1.61906 0.815311C1.61724 0.835944 1.61997 0.856726 1.62708 0.876184C1.63418 0.895641 1.64548 0.913298 1.66017 0.927901ZM1.24629e-06 3.92212C-0.000504569 3.29063 0.152964 2.66854 0.447111 2.10974C0.457379 2.09004 0.472151 2.07304 0.490226 2.06013C0.5083 2.04721 0.529168 2.03874 0.551132 2.03541C0.573096 2.03207 0.595536 2.03397 0.61663 2.04094C0.637724 2.04791 0.656876 2.05975 0.672529 2.07552L6.80626 8.20925C8.74861 10.1544 11.9212 10.1556 13.8647 8.20925L19.9984 2.07552C20.0141 2.05975 20.0332 2.04791 20.0543 2.04094C20.0754 2.03397 20.0979 2.03207 20.1198 2.03541C20.1418 2.03874 20.1627 2.04721 20.1807 2.06013C20.1988 2.07304 20.2136 2.09004 20.2238 2.10974C20.518 2.66855 20.6714 3.29063 20.671 3.92212V12.0935C20.671 14.2535 18.9139 16.0078 16.7566 16.0078H3.91435C1.75709 16.0078 1.24629e-06 14.2535 1.24629e-06 12.0935V3.92212Z"
                            fill="white"
                          />
                        </svg>

                        <span>mastermindkraftsstudio@gmail.com</span>
                      </div>
                      <div className="con_info">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12.1641 10.5921C11.6414 10.0761 10.9888 10.0761 10.4694 10.5921C10.0732 10.985 9.67698 11.3779 9.28743 11.7774C9.18089 11.8873 9.091 11.9106 8.96115 11.8373C8.70478 11.6975 8.43177 11.5843 8.18539 11.4311C7.03673 10.7087 6.07452 9.77974 5.22218 8.73429C4.79934 8.2149 4.42311 7.65888 4.16009 7.03295C4.10681 6.90643 4.1168 6.82319 4.22002 6.71998C4.61622 6.33709 5.00244 5.94422 5.39198 5.55134C5.93468 5.00531 5.93468 4.36606 5.38865 3.8167C5.07901 3.50373 4.76937 3.19742 4.45974 2.88445C4.14011 2.56483 3.82381 2.24187 3.50086 1.92557C2.97813 1.41617 2.32556 1.41617 1.80617 1.9289C1.40663 2.32178 1.02375 2.72464 0.617555 3.11086C0.241327 3.46711 0.0515486 3.90327 0.0115952 4.41267C-0.0516643 5.2417 0.151432 6.02412 0.437764 6.78657C1.02375 8.36472 1.91604 9.76642 2.99811 11.0516C4.45974 12.7896 6.20437 14.1646 8.24532 15.1568C9.16424 15.6029 10.1165 15.9459 11.1519 16.0025C11.8644 16.0424 12.4837 15.8626 12.9798 15.3066C13.3194 14.9271 13.7023 14.5808 14.0619 14.2179C14.5946 13.6785 14.5979 13.0259 14.0685 12.4932C13.4359 11.8573 12.8 11.2247 12.1641 10.5921ZM11.5282 7.93855L12.7567 7.7288C12.5636 6.60012 12.0309 5.57798 11.2218 4.76559C10.3662 3.90992 9.28411 3.37055 8.09216 3.20408L7.91903 4.43931C8.84129 4.56915 9.68031 4.98534 10.3429 5.6479C10.9688 6.27383 11.3783 7.06624 11.5282 7.93855ZM13.4492 2.59812C12.0309 1.17978 10.2363 0.284157 8.25531 0.0078125L8.08217 1.24304C9.79351 1.48276 11.345 2.25852 12.5703 3.48043C13.7322 4.6424 14.4947 6.11069 14.771 7.72547L15.9996 7.51572C15.6766 5.64457 14.7943 3.94655 13.4492 2.59812Z"
                        fill="white" />
                    </svg>

                    <span>(+92) 3059348425</span>
                  </div>
                      <div className="con_info">
                    <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path 
                        d="M8.18017 13.7222C7.8866 14.0348 7.58334 14.3382 7.27084 14.6319L7.26474 14.6376C6.84268 15.0277 6.28908 15.2444 5.71434 15.2445C5.1396 15.2445 4.58595 15.028 4.16379 14.638L4.15731 14.6323C3.845 14.3382 3.54175 14.0347 3.24798 13.7222H1.23274C1.16199 13.7221 1.09264 13.7418 1.03247 13.779C0.972304 13.8162 0.923716 13.8695 0.89217 13.9328L0.130265 15.4566C0.10125 15.5147 0.0875532 15.5792 0.0904738 15.6441C0.0933943 15.7089 0.112836 15.7719 0.146953 15.8272C0.181071 15.8824 0.228733 15.928 0.285416 15.9596C0.3421 15.9912 0.405926 16.0078 0.470837 16.0079H10.9577C11.0226 16.0078 11.0864 15.9912 11.1431 15.9596C11.1998 15.928 11.2475 15.8824 11.2816 15.8272C11.3157 15.7719 11.3351 15.7089 11.3381 15.6441C11.341 15.5792 11.3273 15.5147 11.2983 15.4566L10.5364 13.9328C10.5048 13.8695 10.4562 13.8162 10.3961 13.779C10.3359 13.7418 10.2665 13.7221 10.1958 13.7222H8.18017Z"
                        fill="white" />
                      <path 
                        d="M5.71429 0.0078125C8.86819 0.0078125 11.4286 2.56819 11.4286 5.7221C11.4286 9.22686 8.27657 12.6444 6.74971 14.076L6.74781 14.0779C6.4665 14.338 6.09749 14.4825 5.71436 14.4826C5.33123 14.4826 4.96216 14.3383 4.68076 14.0783L4.67886 14.0764C3.152 12.6444 0 9.22686 0 5.7221C0 2.56819 2.56038 0.0078125 5.71429 0.0078125ZM5.71429 3.81734C4.66286 3.81734 3.80952 4.67067 3.80952 5.7221C3.80952 6.77353 4.66286 7.62686 5.71429 7.62686C6.76571 7.62686 7.61905 6.77353 7.61905 5.7221C7.61905 4.67067 6.76571 3.81734 5.71429 3.81734Z"
                        fill="white" />
                    </svg>

                    <span>D-36,Block-B North Nazimabad, Karachi.
                    </span>
                  </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-md-6 p-3">
              <form id="contactForm">
                <div className="input_wrapper_list">
                  <div className="input_wrapper">
                    <label >First Name</label>
                    <input className="input" type="text" name="first_name" placeholder="First Name" id="first_name" />
                    <span id="first_name_error" className="error"></span>

                  </div>
                  <div className="input_wrapper">
                    <label >Last Name</label>
                    <input className="input" type="text" name="last_name" placeholder="Last Name" id="last_name" />
                    <span id="last_name_error" className="error"></span>
                  </div>
                </div>

                <div className="input_wrapper_list">
                  <div className="input_wrapper">
                    <label >Email</label>
                    <input className="input" type="email" name="email" placeholder="Email" id="email" />
                    <span id="email_error" className="error"></span>

                  </div>
                  <div className="input_wrapper">
                    <label>Subject</label>
                    <input className="input" type="text" name="subject" placeholder="Subject" id="subject" />
                    <span id="subject_error" className="error"></span>
                  </div>
                </div>
                <div className="input_wrapper">
                  <label  >Message</label>
                  <textarea className="input" rows="4" cols="2" placeholder="Message" name="message"
                    id="message"></textarea>
                  <span id="message_error" className="error"></span>

                </div>
                <div className="send_btn"><button type="submit" className="bh_btn" id="send_mess"><a>Send
                      Message</a></button></div>
              </form>
            </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactForm;
