import React from "react";
import { useParams } from "react-router-dom";
import Datas from "../../data/logements.json";
import "./index.scss";
import Carrousel from "../../components/Carrousel"


//recup l'id du logement
//a partir de l'id recup les infos du logement
//creer les composants pour afficher les infos du logement







export default function Logements() {
    const {id} = useParams();
    const logementData = Datas.find(data => data.id === id);
    return(
    <>
    <Carrousel imageCarrousel={logementData.pictures} />
    <div className="logement">
        <div className="logement_content">
            <div className="logement_info">
                <h1>{logementData.title}</h1>
                <p>{logementData.location}</p>
                <div>
                    <span>{logementData.host.name}</span>
                </div>
                <img src={logementData.host.picture} alt="" />
            </div>
            <div className="logement_host_name">
                
            </div>
        </div>
    </div>
    </>
    );
}

