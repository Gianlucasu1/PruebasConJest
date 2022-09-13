/**
 * @jest-environment jsdom
 */

import React from "react"
import { render, screen } from "@testing-library/react";
import { EjercicioProps } from "../../src/components/EjercicioProps"

describe('Pruebas en <EjercicioProps />', () => {

    const name = "Gianluca";

    test('Debe hacer match con el snapshot', () => {

        const {container} = render(<EjercicioProps name={name} lastname="Gianluca" />)

        expect( container ).toMatchSnapshot();

    })

    test("Debe mostrar Hola Gianluca", () =>{
        render(<EjercicioProps name={name} lastname="Gianluca" />)
        screen.debug();
    })
    
});
