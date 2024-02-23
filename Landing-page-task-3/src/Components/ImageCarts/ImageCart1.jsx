import React from "react";
import "./ImageCart1.css"

const ImageCart1 = ({ src, text }) => {
    return <>
        <div className="imagecontainer">
            <img src={src} className="image" alt="" />
            <p className="text">{text}</p>
        </div>
    </>
};

export default ImageCart1;
