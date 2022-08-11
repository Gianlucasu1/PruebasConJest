import React from "react";
// We need to install proptypes in the main carpet using npm install prop-types
import PropTypes from "prop-types";

export const EjercicioProps = ({name, lastname, number}) => {

    


    return (
    <>

        <h1>Hola, es un gusto{name} {lastname}. Tu turno es el # {number}</h1>

    </>
    );
}


EjercicioProps.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    lastname: PropTypes.string.isRequired
}

EjercicioProps.defaultProps = {
    value: 8
}