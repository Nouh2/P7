import React from "react";
import { Link } from "react-router-dom";
import "../Header/index.scss";
import logo from "../../images/LOGO.jpg"

export default function Header() {
    return (
    <header className="header">
      <div className="header_logo">
        <Link to="/"><img src={logo} alt="Kasa" /></Link>
      </div>
      <ul className="header_list">
        <li>
          <Link to="/" className="header_link"><p>Acceuil</p></Link> {/* Lien vers la page d"acceuil */}
        </li>
        <li>
          <Link to="/about" className="header_link"><p>À Propos</p></Link> {/* Lien vers la page "A Propos" */}
        </li>
      </ul>
    </header>
    )
}
