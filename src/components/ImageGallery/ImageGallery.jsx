import React from "react";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem"
import "//src/styles.css"

export function ImageGallery({images}) {
    return (
        <div>
            <ul className="gallery">
                {
                    images.map(({ id, ...otherProps }) => (
                         <ImageGalleryItem key={id} {...otherProps} /> ))
                }

            </ul>
        </div>
    )
}