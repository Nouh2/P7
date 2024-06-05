import React from "react";
import Banner from "../../components/Banner";
import ImgBanner from "../../images/BANNER.jpg";
import Gallery from "../../components/Gallery";

export default function Home(props){
    return (
        <div>
            <Banner title="Chez vous, partout et ailleurs" img={ImgBanner} />
            <Gallery />
        </div>
    );
}