import React from "react";
import BlockTitle from "./BlockTitle";

import TeamShape1 from "../assets/images/shapes/team-1-bg-1-1.png";
import TeamShape2 from "../assets/images/shapes/team-1-bg-1-2.png";
import rendy from "../assets/images/team/rendy.jpeg";
import andre from "../assets/images/team/andre.jpeg";
import niko from "../assets/images/team/niko.jpeg";
import shidiq from "../assets/images/team/shidiq.jpeg";
import dani from "../assets/images/team/Dani.jpeg";
import zain from "../assets/images/team/zain.jpeg";

const Team = () => {
  return (
    <section className="team-one" id="team">
      <img src={TeamShape1} className="team-one__bg-shape-1" alt="" />
      <img src={TeamShape2} className="team-one__bg-shape-2" alt="" />
      <div className="container">
        <BlockTitle
          textAlign="center"
          paraText="Mempersembahkan Team"
          titleText={`Meet Our Professional \n Team Members Of LOJ Tech`}
        />
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="team-one__single">
              <div className="team-one__circle"></div>
              <div className="team-one__inner">
                <h3>Rendy Pranata</h3>
                <p>App Designer</p>
                <div className="team-one__image">
                  <img src={rendy} alt="" />
                </div>
                <div className="team-one__social">
                  <a href="#">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="team-one__single">
              <div className="team-one__circle"></div>
              <div className="team-one__inner">
                <h3>Andre</h3>
                <p>Leader Project</p>
                <div className="team-one__image">
                  <img src={andre} alt="" />
                </div>
                <div className="team-one__social">
                  <a href="#">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://instagram.com/andriebanueka?igshid=YmMyMTA2M2Y=">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="team-one__single">
              <div className="team-one__circle"></div>
              <div className="team-one__inner">
                <h3>Niko Akbariyadi</h3>
                <p>App Designer</p>
                <div className="team-one__image">
                  <img src={niko} alt="" />
                </div>
                <div className="team-one__social">
                  <a href="https://www.facebook.com/nieqo">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="team-one__single">
              <div className="team-one__circle"></div>
              <div className="team-one__inner">
                <h3>Muhammad Nuh Almadani</h3>
                <p>Full Stack Developer</p>
                <div className="team-one__image">
                  <img src={dani} alt="" />
                </div>
                <div className="team-one__social">
                  <a href="https://www.facebook.com/muhammad.nuhalmadani">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://instagram.com/muhammadnuhalmadani?igshid=NWRhNmQxMjQ=">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="team-one__single">
              <div className="team-one__circle"></div>
              <div className="team-one__inner">
                <h3>Shidiq Pitoyo</h3>
                <p>Mobile App Developer</p>
                <div className="team-one__image">
                  <img src={shidiq} alt="" />
                </div>
                <div className="team-one__social">
                  <a href="#">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://instagram.com/shidiq_pitoyo?igshid=YmMyMTA2M2Y=">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="team-one__single">
              <div className="team-one__circle"></div>
              <div className="team-one__inner">
                <h3>Muhammad Khuzain</h3>
                <p>Full Stack Developer</p>
                <div className="team-one__image">
                  <img src={zain} alt="" />
                </div>
                <div className="team-one__social">
                  <a href="https://www.facebook.com/muhammad.khuzain.5">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://instagram.com/ku_zein?igshid=YmMyMTA2M2Y=">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
