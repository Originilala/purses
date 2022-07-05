import React from "react";

function Tile({image, alt, title, text1, text2}) {
    return(
        <section>
            {image ? (<img src={image} alt={alt}/>)
                : null}
            <h2>{title}</h2>
            <p>{text1}</p>
            <p>{text2}</p>
        </section>
    );
}

export default Tile;