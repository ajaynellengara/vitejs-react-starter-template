import React, { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../../assets/images/Twitter-logo-png.png';
import Accordion from '../Accordion';
// import './style';
import './style.scss';

export const Header = () => {
  const [mobile, setMobile] = useState(false);
  // const [activeItems, setActiveItems] = useState([]);
  const location = useLocation();
  const pathname = location.pathname;
  const accordionRef = useRef(null);

  return (
    <header className="header">
      <div className="header_main">
        <div className="container">
          <div className="dFlx">
            <div className="lftSd">
              <Link to="/" className="header_logo">
                <img src={logoImg} alt="logo" width="100%" />
              </Link>
            </div>
            <div className="rgtSd">
              <nav
                className={`${
                  mobile ? 'nav mobileIsActive' : 'nav mobileIsNotActive'
                }`}
              >
                <ul className="nav_list">
                  <li
                    className={`nav_list_item ${
                      Accordion ? 'hasSubNav active' : ' '
                    }`}
                  >
                    <Accordion
                      title={'Home'}
                      content={
                        <ul className="nav_list">
                          <li className="nav_list_item">
                            <Link to="/" className=" nav_button">
                              Home1
                            </Link>
                          </li>
                          <li className="nav_list_item">
                            <Link to="/home2" className=" nav_button">
                              Home2
                            </Link>
                          </li>
                          <li className="nav_list_item">
                            <Link to="/home3" className=" nav_button">
                              Home3
                            </Link>
                          </li>
                        </ul>
                      }
                      isOpenDefault={false}
                      closeOnOutsideClick={true}
                      ref={accordionRef}
                    />
                  </li>
                  <li
                    className={`nav_list_item ${
                      Accordion ? 'hasSubNav active' : ' '
                    }`}
                  >
                    <Accordion
                      title={'About'}
                      content={
                        <ul className="nav_list">
                          <li className="nav_list_item">
                            <Link to="/about1" className=" nav_button">
                              About1
                            </Link>
                          </li>
                          <li className="nav_list_item">
                            <Link to="/about2" className=" nav_button">
                              About2
                            </Link>
                          </li>
                          <li className="nav_list_item">
                            <Link to="/about3" className=" nav_button">
                              About3
                            </Link>
                          </li>
                        </ul>
                      }
                      isOpenDefault={false}
                      closeOnOutsideClick={true}
                      ref={accordionRef}
                    />
                  </li>
                  <li
                    className={`nav_list_item ${
                      Accordion ? 'hasSubNav active' : ' '
                    }`}
                  >
                    <Accordion
                      title={'Services'}
                      content={
                        <ul className="nav_list">
                          <li className="nav_list_item">
                            <Link to="/services1" className=" nav_button">
                              Services1
                            </Link>
                          </li>
                          <li className="nav_list_item">
                            <Link to="/services2" className=" nav_button">
                              Services2
                            </Link>
                          </li>
                          <li className="nav_list_item">
                            <Link to="/services3" className=" nav_button">
                              Services3
                            </Link>
                          </li>
                        </ul>
                      }
                      isOpenDefault={false}
                      closeOnOutsideClick={true}
                      ref={accordionRef}
                    />
                  </li>
                  <li
                    className={`nav_list_item ${
                      Accordion ? 'hasSubNav active' : ' '
                    }`}
                  >
                    <Link
                      to="/blog"
                      className={
                        pathname === 'blog' ? 'nav_button active' : 'nav_button'
                      }
                    >
                      Blog
                    </Link>
                  </li>
                  <li
                    className={`nav_list_item ${
                      Accordion ? 'hasSubNav active' : ' '
                    }`}
                  >
                    <Link
                      to="/contact"
                      className={`nav_button ${
                        pathname === 'contact' ? 'active' : ''
                      }`}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>

              <div className="menu_controller">
                <button
                  onClick={() => setMobile(!mobile)}
                  className={`${mobile ? 'open' : 'closed'}`}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
