import React, { useState } from "react";
import ModalVideo from "react-modal-video";

import BannerShape from "../assets/images/shapes/banner-shape-1-1.png";
import BannerBG from "../assets/images/resources/img-3.jpg";
import BannerMoc from "../assets/images/ss/home-phone12.png";
import Download from "../assets/images/asalogo/loj.png";

const Banner = () => {
  const [open, setOpen] = useState({
    isOpen: false,
  });
  const openModal = () => {
    setOpen({
      isOpen: true,
    });
  };

  return (
    <section className="banner-one" id="home">
      <img src={BannerShape} className="banner-one__bg-shape-1" alt="" />
      <div
        className="banner-one__bg"
        style={{ backgroundImage: `url(${BannerBG})` }}
      ></div>
      <div className="container">
        <ModalVideo
          channel="youtube"
          isOpen={open.isOpen}
          videoId="Kl5B6MBAntI"
          onClose={() => setOpen({ isOpen: false })}
        />
        {/* <div onClick={openModal} className="banner-one__video video-popup">
          <i className="fa fa-play"></i>
        </div> */}
        <div className="banner-one__moc">
          <img
            src={BannerMoc}
            className="wow fadeInUp"
            data-wow-duration="1500ms"
            alt=""
          />
        </div>
        <div className="row">
          <div className="col-lg-7">
            <div className="banner-one__content">
              {/* <form
                className="banner-one__mc-form mc-form"
                data-url="MAILCHIMP__POPUP__FORM__URL"
              >
                <input type="text" name="email" placeholder="Email address" />
                <button type="submit" className="thm-btn banner-one__mc-btn">
                  <span>Free Trial</span>
                </button>
              </form> */}
              <div className="mc-form__response"></div>
              <h3>
                ASTO SERVICE APP (ASA)
              </h3>
              <h1>
                Where It All Began
              </h1>
              <h2 className="pt-4">Developed By Lintas Orbit Jaya Tech</h2>
              <div className="container pt-4" width="100%" height="100%">
                <img src={Download}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
