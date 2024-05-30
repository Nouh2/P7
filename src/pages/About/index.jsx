import React from "react";

import Header from "../../components/Header/";
import Footer from "../../components/Footer/";
import Main from "../../components/Main";
import Banner from "../../components/Banner/";
import ImgBanner from "../../images/Section1.jpg";
import Card_About from "../../components/CardAbout";

export default function About(){

  const fiabilite = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
  const respect = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
  const service = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
  const securite = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."


    return (
        <div>
            <Header />
            <Main>
            <Banner img={ImgBanner} />
            <div className="about">
                <Card_About title="Fiabilité" >{fiabilite}</Card_About>
                <Card_About title="Respect" >{respect}</Card_About>
                <Card_About title="Service" >{service}</Card_About>
                <Card_About title="Sécurité" >{securite}</Card_About>
            </div>
            </Main>
            <Footer />
            
        </div>
    );
}

