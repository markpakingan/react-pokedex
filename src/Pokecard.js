import React from "react";

const Pokecard = ({name, image, type}) => {
    return (
        <>
        <h4>{name}</h4>
        <h4>{image}</h4>
        <h4>{type}</h4>
        </>
    )
}

export default Pokecard;
