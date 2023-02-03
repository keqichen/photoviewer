import React from "react";  // import React (to provide access to TSX)

import './ImageSelector.css'

export function ImageSelector(props: {
    setState: React.Dispatch<React.SetStateAction<string>>,
    image: string
}) {
    const urls = [];
    const brokenImages = [
        1, 24, 32, 36, 44, 47
    ];

    for (let i = 0; i < 50; i++) {
        if (!brokenImages.includes(i)) {
            const imageNumberString = i.toString().padStart(2, '0');
            urls.push(`https://picsum.photos/id/6${imageNumberString}/600/600.jpg`)
        }
    }


    const jsxElement = [];
    for (let i = 0; i < urls.length; i++) {
        const newUrl = urls[i];
        jsxElement.push(
            <img className={newUrl === props.image ? "thumbnail-image-selected thumbnail-image" : "thumbnail-image"}
                key={i}
                src={urls[i]}
                onClick={function () {
                    props.setState(newUrl);
                }}>
            </img>)
    }

    return (
        <>
            <h2>Select your photo</h2>
            <div className="selector-image">
                {jsxElement}
            </div>
        </>
    )



}


