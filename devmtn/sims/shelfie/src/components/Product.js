import React, { Component } from 'react';

function Product (props){
    const {name, price, image} = props
    return(
        <div>
            <h3>{name}</h3>
            <h3>{price}</h3>
            <h3>{image}</h3>
        </div>
    )
}



export default Product