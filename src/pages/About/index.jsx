import React from "react";
import Banner from "../../components/Banner/";
import ImgBanner from "../../images/Section1.jpg";
import CardAbout from "../../components/Collapse";

export default function About(){

  const fiabilite = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
  const respect = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
  const service = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
  const securite = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."


    return (
        <div>
            <Banner img={ImgBanner} />
            <div className="about">
                <CardAbout title="Fiabilité" description = {fiabilite}></CardAbout>
                <CardAbout title="Respect" description = {respect}></CardAbout>
                <CardAbout title="Service" description = {service}></CardAbout>
                <CardAbout title="Sécurité" description = {securite}></CardAbout>
            </div>       
        </div>
    );
}

