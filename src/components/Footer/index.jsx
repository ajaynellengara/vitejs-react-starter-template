import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/Twitter-logo-png.png';
import Accordion from '../Accordion';

const Footer = () => {
  const accordionRef = useRef(null);

  // const handleButtonClick = () => {
  //   // Example of programmatically controlling the Accordion
  //   if (accordionRef.current) {
  //     accordionRef.current.toggleAccordion(); // or other methods like closeAccordion(), openAccordion()
  //   }
  // };

  return (
    <footer>
      <div className="footer_main">
        <div className="container">
          <div className="dFlx">
            <div className="Col">
              <Link to="/" className="footer_logo">
                <img src={logoImg} alt="logo" width="100%" />
              </Link>
              <ul className="footer_info_list">
                <li>
                  <Link to="/" className="cmnLinks">
                    <span>
                      Nunc imperdiet consectetur turpis, vitae venenatis turpis
                      posuere non. Suspendisse potenti.
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="mailto:sales@greenvilla.com"
                    className="cmnLinks"
                    target="_blank"
                  >
                    <div className="icon">
                      <svg viewBox="0 0 29.861 17.253">
                        <path
                          id="email_4_"
                          data-name="email (4)"
                          d="M32.207,24H11.636a2.662,2.662,0,0,0-2.654,2.654v1a.664.664,0,1,0,1.327,0v-1a1.665,1.665,0,0,1,.066-.4l7.432,6.37L10.375,39a1.665,1.665,0,0,1-.066-.4v-1a.664.664,0,0,0-1.327,0v1a2.662,2.662,0,0,0,2.654,2.654H32.207A2.662,2.662,0,0,0,34.861,38.6V26.654A2.662,2.662,0,0,0,32.207,24ZM11.37,25.36a.647.647,0,0,1,.265-.033H32.207a.647.647,0,0,1,.265.033l-10.12,8.66a.7.7,0,0,1-.863,0ZM32.207,39.926H11.636a.647.647,0,0,1-.265-.033l7.465-6.4,1.792,1.559a1.931,1.931,0,0,0,2.588,0l1.792-1.559,7.465,6.4A.647.647,0,0,1,32.207,39.926ZM33.534,38.6a1.665,1.665,0,0,1-.066.4l-7.432-6.37,7.432-6.37a1.666,1.666,0,0,1,.066.4ZM6.991,30.968a.666.666,0,0,1,.664-.664h3.982a.664.664,0,0,1,0,1.327H7.654A.666.666,0,0,1,6.991,30.968Zm4.645,3.982H5.664a.664.664,0,0,1,0-1.327h5.972a.664.664,0,0,1,0,1.327Z"
                          transform="translate(-5 -24)"
                        />
                      </svg>
                    </div>
                    <span>ajay@admin.com</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="tel:+91 7994116400"
                    className="cmnLinks"
                    target="_blank"
                  >
                    <div className="icon">
                      <svg viewBox="0 0 20.007 20.005">
                        <path
                          id="Path_1497"
                          data-name="Path 1497"
                          d="M4.849,12.965a20.693,20.693,0,0,0,6.883,5.392,10.712,10.712,0,0,0,3.852,1.14c.093,0,.182.008.275.008a3.19,3.19,0,0,0,2.473-1.063.088.088,0,0,0,.016-.02,10.414,10.414,0,0,1,.78-.808c.19-.182.384-.372.57-.566a1.951,1.951,0,0,0-.008-2.906l-2.429-2.429a1.966,1.966,0,0,0-1.423-.655,2.032,2.032,0,0,0-1.439.651l-1.447,1.447c-.133-.077-.271-.145-.4-.21a5,5,0,0,1-.445-.242A15.313,15.313,0,0,1,8.45,9.372,8.818,8.818,0,0,1,7.214,7.4c.38-.344.736-.7,1.079-1.055.121-.125.247-.251.372-.376a2.072,2.072,0,0,0,.671-1.455,2.056,2.056,0,0,0-.671-1.455l-1.2-1.2c-.141-.141-.275-.279-.412-.42C6.781,1.16,6.5.877,6.227.622A2.015,2.015,0,0,0,4.8,0,2.074,2.074,0,0,0,3.366.626L1.854,2.138A3.106,3.106,0,0,0,.929,4.126,7.48,7.48,0,0,0,1.491,7.36,18.81,18.81,0,0,0,4.849,12.965ZM1.915,4.211a2.138,2.138,0,0,1,.643-1.374l1.5-1.5A1.088,1.088,0,0,1,4.8.99a1.033,1.033,0,0,1,.727.352c.271.251.525.513.8.792.137.141.279.283.42.428l1.2,1.2a1.1,1.1,0,0,1,.38.756,1.1,1.1,0,0,1-.38.756c-.125.125-.251.255-.376.38-.376.38-.727.74-1.115,1.083l-.02.02a.79.79,0,0,0-.2.9c0,.012.008.02.012.032A9.512,9.512,0,0,0,7.674,10a16.162,16.162,0,0,0,3.9,3.549,5.785,5.785,0,0,0,.533.291,5,5,0,0,1,.445.242l.044.024a.845.845,0,0,0,.392.1.857.857,0,0,0,.6-.275L15.1,12.42a1.07,1.07,0,0,1,.74-.36,1.015,1.015,0,0,1,.715.36l2.437,2.433a.975.975,0,0,1-.012,1.524c-.17.182-.348.356-.538.538a11.639,11.639,0,0,0-.845.877,2.219,2.219,0,0,1-1.734.736c-.069,0-.141,0-.21-.008a9.732,9.732,0,0,1-3.484-1.043,19.658,19.658,0,0,1-6.551-5.133A18,18,0,0,1,2.424,7.028,6.519,6.519,0,0,1,1.915,4.211Z"
                          transform="translate(-0.663 0.25)"
                        />
                      </svg>
                    </div>
                    <span>+91 00000000</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="Col">
              {/* <div className={isOpen ? 'accordion_item active' : 'accordion_item'}>
                <button
                  onClick={handleaccordionToggle}
                  className={isOpen ? 'accordion_button active' : 'accordion_button'}
                >
                  <h4 className="footer_tle">Quick Links</h4>
                </button>
                <div className={isOpen ? 'accordion_body active' : 'accordion_body'}>
                  <ul className="footer_nav_list">
                    <li>
                      <Link to="index1.php" className="cmnLinks">Home</Link>
                    </li>
                    <li>
                      <Link to="properties.php" className="cmnLinks" >Properties</Link>
                    </li>
                    <li>
                      <Link to="packages.php" className="cmnLinks">Packages</Link>
                    </li>
                    <li>
                      <Link to="blog.php" className="cmnLinks">Blog</Link>
                    </li>
                    <li>
                      <Link to="/" className="cmnLinks">Book Now</Link>
                    </li>
                  </ul>
                </div>
              </div> */}
              <Accordion
                title={<h4 className="footer_tle">Quick Links</h4>}
                content={
                  <ul className="footer_nav_list">
                    <li>
                      <Link to="index1.php" className="cmnLinks">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="properties.php" className="cmnLinks">
                        Properties
                      </Link>
                    </li>
                    <li>
                      <Link to="packages.php" className="cmnLinks">
                        Packages
                      </Link>
                    </li>
                    <li>
                      <Link to="blog.php" className="cmnLinks">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="cmnLinks">
                        Book Now
                      </Link>
                    </li>
                  </ul>
                }
                isOpenDefault={true}
                closeOnOutsideClick={false}
                ref={accordionRef}
              />
            </div>
            <div className="Col">
              <Accordion
                title={<h4 className="footer_tle">Company Info</h4>}
                content={
                  <ul className="footer_nav_list">
                    <li>
                      <Link to="about.php" className="cmnLinks">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="contact.php" className="cmnLinks">
                        Contact Us{' '}
                      </Link>
                    </li>
                    <li>
                      <Link to="privacyPolicy.php" className="cmnLinks">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link to="bookingPolicy.php" className="cmnLinks">
                        Booking Policy
                      </Link>
                    </li>
                    <li>
                      <Link to="terms.php" className="cmnLinks">
                        Terms & Condtions
                      </Link>
                    </li>
                  </ul>
                }
                closeOnOutsideClick={true}
                ref={accordionRef}
              />
            </div>
            <div className="Col">
              <h4 className="footer_tle">Get In Touch</h4>
              <ul className="footer_social_list">
                <li>
                  <Link to="www.facebook.com" target="_blank">
                    <svg viewBox="0 0 10.226 19.692">
                      <path
                        id="f_1_"
                        d="M43.928,19.692V10.71h3.014l.452-3.5H43.928V4.974c0-1.013.28-1.7,1.735-1.7h1.853V.137A25.12,25.12,0,0,0,44.815,0c-2.673,0-4.5,1.631-4.5,4.627V7.209H37.29v3.5h3.023v8.982Z"
                        transform="translate(-37.29)"
                      />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link to="www.instragram.com" target="_blank">
                    <svg viewBox="0 0 16.138 16.138">
                      <g
                        id="Group_189"
                        data-name="Group 189"
                        transform="translate(12.369 2.986)"
                      >
                        <g id="Group_188" data-name="Group 188">
                          <path
                            id="Path_266"
                            data-name="Path 266"
                            d="M392.793,94.739a.392.392,0,1,0,.392.392A.392.392,0,0,0,392.793,94.739Z"
                            transform="translate(-392.401 -94.739)"
                          />
                        </g>
                      </g>
                      <g
                        id="Group_191"
                        data-name="Group 191"
                        transform="translate(4.596 4.596)"
                      >
                        <g id="Group_190" data-name="Group 190">
                          <path
                            id="Path_267"
                            data-name="Path 267"
                            d="M149.277,145.8a3.473,3.473,0,1,0,3.473,3.473A3.477,3.477,0,0,0,149.277,145.8Z"
                            transform="translate(-145.804 -145.804)"
                          />
                        </g>
                      </g>
                      <g
                        id="Group_193"
                        data-name="Group 193"
                        transform="translate(0 0)"
                      >
                        <g id="Group_192" data-name="Group 192">
                          <path
                            id="Path_268"
                            data-name="Path 268"
                            d="M11.714,0H4.424A4.429,4.429,0,0,0,0,4.424v7.29a4.429,4.429,0,0,0,4.424,4.424h7.29a4.429,4.429,0,0,0,4.424-4.424V4.424A4.429,4.429,0,0,0,11.714,0ZM8.069,12.5A4.426,4.426,0,1,1,12.5,8.069,4.431,4.431,0,0,1,8.069,12.5ZM12.76,4.723a1.345,1.345,0,1,1,1.345-1.345A1.346,1.346,0,0,1,12.76,4.723Z"
                          />
                        </g>
                      </g>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link to="www.linkedin.com" target="_blank">
                    <svg viewBox="0 0 19.863 16.138">
                      <path
                        id="Path_265"
                        data-name="Path 265"
                        d="M19.863,49.911a8.49,8.49,0,0,1-2.346.643A4.049,4.049,0,0,0,19.308,48.3a8.138,8.138,0,0,1-2.582.986,4.072,4.072,0,0,0-7.044,2.784A4.193,4.193,0,0,0,9.776,53a11.526,11.526,0,0,1-8.393-4.259,4.073,4.073,0,0,0,1.251,5.442,4.021,4.021,0,0,1-1.84-.5v.045a4.091,4.091,0,0,0,3.262,4,4.064,4.064,0,0,1-1.068.134,3.6,3.6,0,0,1-.771-.07,4.111,4.111,0,0,0,3.8,2.837A8.182,8.182,0,0,1,.974,62.367,7.627,7.627,0,0,1,0,62.311a11.464,11.464,0,0,0,6.247,1.827,11.51,11.51,0,0,0,11.59-11.587c0-.18-.006-.354-.015-.526A8.123,8.123,0,0,0,19.863,49.911Z"
                        transform="translate(0 -48)"
                      />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link to="www.youtube.com" target="_blank">
                    <svg viewBox="0 0 21.047 16.138">
                      <path
                        id="youtube_1_"
                        data-name="youtube (1)"
                        d="M7.319,70.692V65.62a.828.828,0,0,1,.123-.438.91.91,0,0,1,.329-.315.963.963,0,0,1,.888-.037L14.2,67.364a.921.921,0,0,1,.383.317.851.851,0,0,1,0,.948.893.893,0,0,1-.383.317L8.66,71.482a.99.99,0,0,1-.448.09,1.01,1.01,0,0,1-.44-.127.909.909,0,0,1-.329-.315A.828.828,0,0,1,7.319,70.692ZM18.6,60.087H3.444A2.947,2.947,0,0,0,.5,63.031V73.282a2.951,2.951,0,0,0,2.943,2.944H18.6a2.954,2.954,0,0,0,2.944-2.944V63.031A2.951,2.951,0,0,0,18.6,60.087Z"
                        transform="translate(-0.5 -60.087)"
                      />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
