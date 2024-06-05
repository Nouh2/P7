import React from "react";
import "./index.scss";
import vector from "../../images/Vector.jpg"


export default function Card_About(props) {
    const [isOpen, setIsOpen] = React.useState(false)
    function handleClick() {
        setIsOpen(!isOpen)
    }
    return (
        <div className="card_about">
            <header className="card_about__header"  onClick={handleClick}>
                <h2>{props.title}</h2>
                <button>
                    <img className={isOpen ? 'vector': 'vector'} src={vector}/>
                </button>
            </header>
            { isOpen && (
            <div className="card_about__text">
                {props.children}
            </div>)}
        </div>
    )
}