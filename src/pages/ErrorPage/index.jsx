import React from "react";
import { Link } from "react-router-dom";
import "../ErrorPage/index.scss"

export default function ErrorPage() {
    return (
        <div className="container">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link className="link" to="/">Retourner sur la page d'accueil</Link>
        </div>
    );
}