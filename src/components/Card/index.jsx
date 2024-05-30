import React from "react";
import { Link } from 'react-router-dom';

import "../Card/index.scss";

export default function Card({id, title}) {

	return (
		<Link to={`/Logements/${id}`} className="gallery_card">
			<img src={cover} />
			<h3>{title}</h3>	
		</Link>
	);
}