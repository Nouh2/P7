import React from "react";
import Banner from "../../components/Banner/index.jsx";
import ImgBanner from "../../images/BANNER.jpg";

export default function Home(){
    return (
        
        <div>
            <Banner title="Chez vous, partout et ailleurs" img={ImgBanner} />
        </div>
        
    );
}