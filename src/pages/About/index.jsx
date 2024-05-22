import React from "react";

import Header from "../../components/Header/index.jsx";
import Footer from "../../components/Footer/index.jsx";
import Banner from "../../components/Banner/index.jsx";
import ImgBanner from "../../images/BANNER.png";
import Card_About from "../../components/Card_About/index.jsx";

export default function About(){
    return (
        <div>
            <Header />
            <div className="about">
                <Card_About />
            </div>
            <Footer />
            
        </div>
    );
}