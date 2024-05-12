import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/Header/index.jsx";

export default function About(){
    return (
        <><Header /><div className="container">
            <h1>À propos</h1>
            <p>Depuis 2001, Kasa propose des logements de qualité pour les particuliers et les professionnels. Notre mission, rendre le séjour de nos clients le plus agréable possible.</p>
            <Link className="link" to="/logements">Découvrir nos logements</Link>
        </div></>
    );
}