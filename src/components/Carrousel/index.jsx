import React from "react";
import "./index.scss";
import { useState } from 'react'
import ArrowRight from "../../images/chevron_carousel_right.png"
import ArrowLeft from "../../images/chevron_carousel_left.png"


//on recupere l'id direct dans logements donc on passe id comme props
//afficher l'image en grand avec les boutons next et previous
//on doit pouvoir naviguer entre les photos


export default function Carrousel({imageCarrousel}) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
            // const newIndex = currentIndex + 1
            // setCurrentIndex(
            //     newIndex !== imageCarrousel.length - 1 ? newIndex : 0
            // )
            if (currentIndex === imageCarrousel.length - 1) {
                setCurrentIndex(0)
            } else {
                setCurrentIndex(currentIndex + 1)
            }
        }
    

    const prevSlide = () => {
        const newIndex = currentIndex - 1
        setCurrentIndex(
            newIndex < 0 ? imageCarrousel.length - 1 : newIndex
        )
    }

    return (
        <section style={{backgroundImage : `url(${imageCarrousel[currentIndex]})`}} className='carousel'>
            {imageCarrousel.length > 1 && // Vérifie s'il y a plus d'une image dans le tableau
                <> 
                    <img 
                        className='carousel_arrow carousel_arrow_right' 
                        src={ArrowRight} 
                        alt="show next slider" 
                        onClick={nextSlide}
                    />
                    <img 
                        className='carousel_arrow carousel_arrow_left' 
                        src={ArrowLeft} 
                        alt="show previous slider" 
                        onClick={prevSlide}
                    />
                    {/* Affichage du numéro de la diapositive actuelle et le nombre total de diapositives */}
                    <p className='slideCount'>{currentIndex + 1} / {imageCarrousel.length}</p>
                </>
            } 
        </section>
    )
}