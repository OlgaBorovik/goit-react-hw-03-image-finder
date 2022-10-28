import React from "react";

export function ImageGalleryItem({webformatURL, tags}) {
    return (
        <li className="gallery-item">
            <img src={webformatURL} alt={tags} />
        </li>
    )
}