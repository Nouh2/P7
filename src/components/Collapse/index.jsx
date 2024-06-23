import React from "react";
import "./index.scss";
import { useState } from "react";
import vector from "../../images/Vector.jpg"


export default function Collapse(props) {
  const [isOpen, setIsOPen] = useState(true);

  const toggleCollapse = () => {
    setIsOPen(!isOpen);
  }

  return (
    <div className="Collapse_Container">
        <div className="Collapse_header" onClick={toggleCollapse}>
            <h2 className="Collapse_title">{props.title}</h2>
            <img src={vector} alt="vector" className={`vector ${isOpen ? '' : 'Rotate'}`} />
        </div>
        <div className={`Collapse_content ${isOpen ? '' : 'Collapse_content--expanded'}`}>
            <p className="Collapse_para">{props.description}</p>
        </div>
    </div>
  );
}


