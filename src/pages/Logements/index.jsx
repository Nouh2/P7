import React from "react";
import { useParams } from "react-router-dom";
import Datas from "../../data/logements.json";
import "./index.scss";
import Carrousel from "../../components/Carrousel";
import CardAbout from "../../components/Collapse";
import "../../components/Collapse/index.scss";
import greyStar from "../../images/grey_star.png";
import redStar from "../../images/red_star.png";
import ErrorPage from "../ErrorPage";


//recup l'id du logement
//a partir de l'id recup les infos du logement
//creer les composants pour afficher les infos du logement







export default function Logements() {
    const {id} = useParams();
    const logementData = Datas.find(data => data.id === id);

	if (!logementData){
		return <ErrorPage />;
	}

    const name = logementData.host.name.split(' ');
	const rating = logementData.rating;
	const description = logementData.description;
	const equipments = logementData.equipments;
    return(
    <>
    <Carrousel imageCarrousel={logementData.pictures} />
    <div className="logement">
        <div className="logement_content">
            <div className="logement_content_infos">
                <h1>{logementData.title}</h1>
						<p>{logementData.location}</p>
						<div>
							{logementData.tags.map((tag, index) => {
								return (
									<button key={index}>{tag}</button>
								)
							})}
						</div>
					</div>
					<div className="logement_content_host">
						<div>
							<div className="logement_content_host_name">
								<span>{name[0]}</span>
								<span>{name[1]}</span>
							</div>
							<img src={logementData.host.picture} alt="host of this logement" />
						</div>

						<div className="logement_content_host_stars">
							{[...Array(5)].map((star, index) => {
								const ratingValue = index + 1;
								return (
									<img key={index} src={ratingValue <= rating ? redStar : greyStar} alt="star" />
								)
							})}
						</div>
					</div>
				</div>
				<div className="logement_collapse">
					<div className="logement_collapse_container">
					<div className="logement_collapse_item1">
						<CardAbout title={"Description"} description={description} />
					</div>
					<div className="logement_collapse_item2">
						<CardAbout title={"Équipements"} description={equipments} />
					</div>
                    </div>
				</div>             
		</div>           
    </>
    );
}

