import React from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <section id="home_banner">
        <Swiper
          slidesPerView={1}
          effect={'fade'}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
        >
          <SwiperSlide>
            <div className="banner_slide">
              <img src="https://placehold.co/1920x420" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner_slide">
              <img src="https://placehold.co/1920x420" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner_slide">
              <img src="https://placehold.co/1920x420" />
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section id="about_banner">
        <div className="container">
          <div className="d_flx">
            <div className="lft_sd">
              <div className="img_bx">
                <img src="https://placehold.co/800x600" />
              </div>
            </div>
            <div className="rgt_sd">
              <div className="cnt_bx">
                <div className="tle_wrp">
                  <h2 className="m_tle">Main title</h2>
                  <h4 className="s_tle">Sub title</h4>
                </div>
                <p>lorem ipsum</p>
                <div className="btn_wrp">
                  <Link to="/about" className="base_btn">
                    To about
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
