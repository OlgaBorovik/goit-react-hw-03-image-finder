import React from "react";
import {ImageItem, Image} from "./ImageGalleryItem.styled"

export function ImageGalleryItem({webformatURL, tags}) {
    return (
        <ImageItem>
            <Image src={webformatURL} alt={tags} />
        </ImageItem>
    )
}