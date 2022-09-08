import {getContext} from "../../src/base-pruebas/06-deses-obj"

describe('Prueba de archivo 06-deses-obj', () => {

    test('usContext debe de retornar un objeto', ()=>{

        const persona = {
            nombre: "Gianluca",
            edad: 23,
        }

        const probandoPersona = getContext( persona );

        expect ( probandoPersona ).toEqual({
            nombreClave:"Gianluca",
            anios: 23,
            rango:"Capitán"
        })

    })
    
})
