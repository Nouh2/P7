import React from "react";
import "./index.scss";
import Card from "../Card";
import Datas from "../../data/logements.json";

export default function Gallery() {
    return (
        <div className="gallery">
            {Datas.map((data) => {
                return(
                    <Card
                        key={data.id}
                        id={data.id}
                        cover={data.cover}
                        title={data.title}
                    />
                );
            })}
        </div>
    );
}




