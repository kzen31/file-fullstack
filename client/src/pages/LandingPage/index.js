import React, { useContext } from "react";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import BlogHome from "./components/BlogHome";
import CTAThree from "./components/CTAThree";
import Contact from "./components/Contact";
import Services from "./components/Services";
import CTAOne from "./components/CTAOne";
import FunFact from "./components/FunFact";
import CTATwo from "./components/CTATwo";
import Team from "./components/Team";
import Pricing from "./components/Pricing";
import VideoOne from "./components/VideoOne";
import AppScreen from "./components/AppScreen";
import FAQ from "./components/FAQ";
import Clients from "./components/Clients";
import Testimonials from "./components/Testimonials";
import MenuContextProvider from "./context/MenuContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/swiper-bundle.min.css";
import "react-modal-video/css/modal-video.min.css";
import "./assets/css/apton-icons.css";
import "./assets/css/animate.min.css";
import "./assets/css/fontawesome-all.min.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";

function LandingPage() {
    return (
        <MenuContextProvider>
            <Layout pageTitle="Apiton | Home Page">
                <Header
                    btnClass="main-nav__btn"
                    extraClassName="site-header-one__fixed-top"
                />
                <Banner />
                <Services />
                <CTAOne />
                <FunFact />
                <CTATwo />
                <Pricing />
                <Testimonials />
                <Clients />
                <Team />
                <VideoOne />
                <AppScreen />
                <FAQ />
                <BlogHome />
                <Contact />
                <CTAThree />
                <Footer />
            </Layout>
        </MenuContextProvider>
    );
}

export default LandingPage;
