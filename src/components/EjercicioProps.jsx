import React from "react";
// We need to install proptypes in the main carpet using npm install prop-types
import PropTypes from "prop-types";

export const EjercicioProps = ({name, lastname, number}) => {

    


    return (
    <>

    <h1>Hola mi nombre es { name }</h1>
    <p>{lastname}</p>
    <p>My favorite number is {number}</p>

    </>
    );
}


EjercicioProps.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    lastname: PropTypes.string.isRequired
}

EjercicioProps.defaultProps = {
    number:8
}