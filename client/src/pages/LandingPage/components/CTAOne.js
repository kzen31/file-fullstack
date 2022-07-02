import React from "react";
import BlockTitle from "./BlockTitle";

import CtaShape1 from "../assets/images/shapes/cta-1-shape-1.png";
import CtaShape2 from "../assets/images/shapes/cta-1-shape-2.png";
import CtaMoc1 from "../assets/images/ss/home-img.png";

const CTAOne = () => {
  return (
    <section className="cta-one">
      <img src={CtaShape1} className="cta-one__bg-shape-1" alt="" />
      <img src={CtaShape2} className="cta-one__bg-shape-2" alt="" />
      <div className="container">
        <div className="cta-one__moc wow fadeInLeft" data-wow-duration="1500ms">
          <img src={CtaMoc1} className="cta-one__moc-img" alt="" />
        </div>
        <div className="row justify-content-end">
          <div className="col-lg-6">
            <div className="cta-one__content">
              <BlockTitle
                textAlign="left"
                paraText="Deskripsi"
                titleText={`Apa Itu ASA? \n (Asto Service App)`}
              />
              <div className="cta-one__text">
                <p>
                  Asto Service App atau ASA adalah suatu aplikasi yang bertujuan untuk meningkatkan kualitas alur komunikasi serta sebagai media penampung aspirasi, komplain, dan bantuan yang bersifat genting.
                </p>
              </div>
              <ul className="list-unstyled cta-one__list">
                <li>
                  <i className="fa fa-check-circle"></i>
                  Mudah digunakan.
                </li>
                <li>
                  <i className="fa fa-check-circle"></i>
                  Digunakan pada piranti mobile
                </li>
                <li>
                  <i className="fa fa-check-circle"></i>
                  Tersedia di Playstore dan App Store (coming soon).
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAOne;
