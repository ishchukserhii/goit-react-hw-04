import React from 'react'
import { ImageCard } from '../ImageCard/ImageCard'

const ImageGallery = ({img}) => {
  return (
    <ul>
        {img.map((img)=> (
            <li key={img.id}>
                <ImageCard img={img.urls.small} alt={img.alt_description}/>
            </li>))}
    </ul>
  )
}

export default ImageGallery