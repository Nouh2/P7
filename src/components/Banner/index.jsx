import React from "react";
import "../Banner/index.scss";

function Banner(props) {
    return (
     <div className='banner'>
            <img src={props.img} alt="" />
            <div className='bannerfilter'></div>
            <h1>{props.title}</h1>
        </div>
            );
}

export default Banner;