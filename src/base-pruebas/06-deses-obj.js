export const getContext = ({ nombre, edad, rango = 'Capitán' }) => {

    // console.log( nombre, edad, rango );
    
    return {
        nombreClave: nombre,
        anios: edad,
        rango: rango
    }

}






