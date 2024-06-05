import React from "react";
import { Link } from 'react-router-dom';

import "../Card/index.scss";

export default function Card({id, title, cover}) {
	return (
		<Link to={`/logements/${id}`} className="gallery_card">
			<img src={cover} alt={title} />
			<h3>{title}</h3>
		</Link>
	);	
}