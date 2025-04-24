import React from 'react'
import css from "./ImageCard.module.css"
export const ImageCard = ({img, alt, onClick}) => {
  return (
    <div>
        <img className={css.cardImg} src={img} alt={alt} onClick={onClick} /> 
    </div>
  )
}


