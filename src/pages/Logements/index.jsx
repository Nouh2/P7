import React from "react";
import { Link } from "react-router-dom";

export default function Logements(){
    return (
        <div className="container">
            <h1>Nos logements</h1>
            <p>Découvrez tous nos logements disponibles.</p>
            <Link className="link" to="/about">Retour à l'accueil</Link>
        </div>
    );
}