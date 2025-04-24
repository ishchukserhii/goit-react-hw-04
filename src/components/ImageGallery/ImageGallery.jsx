import React from 'react'
import { ImageCard } from '../ImageCard/ImageCard'
import css from "./ImageGallery.module.css"

const ImageGallery = ({img, onImageClick}) => {
  return (
    <ul className={css.gallery}>
        {img.map((img)=> (
            <li key={img.id} className={css.card}>
                <ImageCard img={img.urls.small} alt={img.alt_description} onClick={() => onImageClick(img.urls.regular)}
            style={{ cursor: "zoom-in" }}/>
            </li>))}
    </ul>
  )
}

export default ImageGallery