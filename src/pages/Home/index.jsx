import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/index.jsx";
import Banner from "../../components/Banner/index.jsx";

export default function Home(){
    return (
        <><Header /><div className="container">
            <><Banner /></>
        </div></>
    );
}