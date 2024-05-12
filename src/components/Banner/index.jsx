import React from "react";
import { Link } from "react-router-dom";
import "../Banner/index.scss";
import banner from "../../images/BANNER.png"

export default function Banner() {
    return (
        <div className="banner">
            <img className="banner-img" src={banner} alt="banner Kasa"></img>
            <div className="banner-text">
            <h1>Chez vous, partout et ailleurs</h1>
            </div>
            
        </div>
            )
}
