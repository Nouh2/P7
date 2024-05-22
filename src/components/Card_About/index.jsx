import React from "react";
import "../Card_About/index.scss";
import vector from "../../images/Vector.jpg"

export default function Card_About(title, children) {
    return (
        <div className="card_about">
            <header className="card_about__header">
                <h2>Fiabilité</h2>
                <button><img src={vector}></img></button>
            </header>
            <div className="card_about__text">
                Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
            </div>
        </div>
    )
}