import React from "react";
import bag1 from "./assets/bag_1.png";

function Product({image, text, price}) {
    return (
        <article><span>Best seller</span><img src={image} alt={text}/>
            <p>{text}</p>
            <h4>{price}</h4>
        </article>
    );
}

export default Product;