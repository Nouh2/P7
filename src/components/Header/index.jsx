import React from "react";
import { Link } from "react-router-dom";
import "../Header/index.scss";
import logo from "../../images/LOGO.jpg"

export default function Header() {
    return (
            <nav className="header">
                <img src={logo} alt="logo Kasa"></img>
                <ul>
                    <Link to="/">Accueil</Link>
                    <Link to="/about">A propos</Link>
                </ul>
            </nav>
    )
}
