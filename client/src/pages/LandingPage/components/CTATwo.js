import React from "react";
import BlockTitle from "./BlockTitle";

import angular from "../assets/images/teknologi/angular.png";
import java1 from "../assets/images/teknologi/java1.png";
import postgre from "../assets/images/teknologi/postgre.png";
import ionic from "../assets/images/teknologi/ionic.png";
import CTAImage3 from "../assets/images/resources/cta-2-moc-3.png";

const CTATwo = () => {
  return (
    <section className="cta-two">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="cta-two__content">
              <BlockTitle
                textAlign="left"
                paraText="Teknologi"
                titleText={`Asto Service App (ASA) \n Dibangun Dengan Teknologi Terkini`}
              />
              <div className="cta-two__icon-wrap">
                <div className="cta-two__icon-single">
                  <div className="cta-two__icon">
                    <i className="apton-icon-app-development"></i>
                  </div>
                  <h3>
                    User Friendly <br /> Design
                  </h3>
                </div>
                <div className="cta-two__icon-single">
                  <div className="cta-two__icon">
                    <i className="apton-icon-computer-graphic1"></i>
                  </div>
                  <h3>
                    Khusus Dibuat Pada<br /> Mobile App
                  </h3>
                </div>
              </div>
              <div className="cta-two__text text-center">
                <p>
                  Asto Service App (ASA) dibuat dengan bahasa pemerograman javascript dengan framework Angular dengan didukung dengan multicross platform Ionic
                  dan webserver menggunakan bahasa pemerograman java dengan memanfaatkan DMBS Postgre sehingga aplikasi yang dibangun sudah mengunakan teknologi terkini dan terbaru
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 ">
            <div className="cta-two__images d-flex justify-content-end align-items-end flex-column">
              <img
                src={angular}
                className="wow fadeInUp"
                data-wow-duration="1500ms"
                alt=""
              />
              <img
                src={java1}
                className="wow fadeInUp"
                data-wow-duration="1500ms"
                alt=""
              />
              <img
                src={postgre}
                className="wow fadeInUp"
                data-wow-duration="1500ms"
                alt=""
              />
              <img
                src={ionic}
                className="wow fadeInUp"
                data-wow-duration="1500ms"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTATwo;
