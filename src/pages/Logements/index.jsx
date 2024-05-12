import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/Header/index.jsx";

export default function Logements(){
    return (
        <><Header /><div className="container">
            <h1>Nos logements</h1>
            <p>Découvrez tous nos logements disponibles.</p>
            <Link className="link" to="/about">Retour à l'accueil</Link>
        </div></>
    );
}