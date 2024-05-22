import React from "react";
import "../Banner/index.scss";

function Banner(title, img) {
    return (
     <div className='banner'>
            <img src={img} alt="" />
            <div className='bannerfilter'></div>
            <h1>{title}</h1>
        </div>
            );
}

export default Banner;