import React from "react";  // import React (to provide access to TSX)
import './PhotoViewer.css'

export function PhotoViewer(props: PhotoUrl) {    // declare and export new function called 'PhotoViewer'

    return (
        <div className="image-wrapper">
            <img className="image" src={props.imgUrl} alt="this is an image"></img>

        </div>
    );
}

interface PhotoUrl {
    imgUrl: string,
}
