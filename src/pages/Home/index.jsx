import React from "react";
import Header from "../../components/Header/index.jsx";
import Banner from "../../components/Banner/index.jsx";
import ImgBanner from "../../images/BANNER.png";
import Footer from "../../components/Footer/index.jsx";

export default function Home(){
    return (
        
        <div>
            <Header />
            <Banner title="Chez vous, partout et ailleurs" img={ImgBanner} />
            <Footer />
        </div>
        
    );
}