import React from "react";
import BlockTitle from "./BlockTitle";
import ASALIFE from "../assets/images/asalogo/ASA_Life.png";
import ASASGMS from "../assets/images/asalogo/ASA_SGMS.png";
import ASAEVEN from "../assets/images/asalogo/ASA_Even.png";
import ASASHOP from "../assets/images/asalogo/ASA_Shop.png";

const Services = () => {
  return (
    <section className="service-one" id="Fitur">
      <div className="container pt-4">
        <BlockTitle
          textAlign="center"
          paraText="FITUR APLIKASI"
          titleText={`ASTO SERVICE APP MEMILIKI BANYAK \n FITUR UNTUK ANDA`}
        />
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="service-one__single">
              <div className="service-one__inner">
                <div className="service-one__circle"></div>
                <div className="service-one__icon">
                  <img src={ASALIFE} width="150" alt="" />
                </div>
                <h3>ASA LIFE</h3>
                <p>Mempermudah Pengguna Pada Lingkungan Mess</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="service-one__single">
              <div className="service-one__inner">
                <div className="service-one__circle"></div>
                <div className="service-one__icon">
                  <img src={ASASGMS} width="150" alt="" />
                </div>
                <h3>ASA SGMS</h3>
                <p>Mempermudah Penginformasian Keadaan Darurat</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="service-one__single">
              <div className="service-one__inner">
                <div className="service-one__circle"></div>
                <div className="service-one__icon">
                  <img src={ASAEVEN} width="150" alt="" />
                </div>
                <h3>ASA EVEN</h3>
                <p>Memudahkan Akses Informasi Even Di KPP ASTO</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="service-one__single">
              <div className="service-one__inner">
                <div className="service-one__circle"></div>
                <div className="service-one__icon">
                  <img src={ASASHOP} width="150" alt="" />
                </div>
                <h3>ASA SHOP</h3>
                <p>Mempermudah Belanja Dilingkungan Mess Asto</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
