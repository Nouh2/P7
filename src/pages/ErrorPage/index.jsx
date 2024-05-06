import React from "react";
import { Link } from "react-router-dom";
import "../ErrorPage/index.scss";
import Header from "../../components/Header/index.jsx";

export default function ErrorPage() {
    return (
        <><Header /><div className="container">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link className="link" to="/">Retourner sur la page d'accueil</Link>
        </div></>
    );
}