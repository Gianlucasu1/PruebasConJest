/**
 * @jest-environment jsdom
 */

import React from "react"
import { render } from "@testing-library/react";
import { EjercicioProps } from "../../src/components/EjercicioProps"

describe('Pruebas en <EjercicioProps />', () => {

    test('Debe hacer match con el snapshot ',() => {
        
        const name = "Gianluca";
        const lastname = "Casu";
        const {container} = render( <EjercicioProps name ={name} lastname={lastname}/> );

        expect( container ).toMatchSnapshot();

    });

    test('Debe de mostrar el título en un h1', () => {

        const name= "Gianluca";
        const {getByText,getByTestId} = render(<EjercicioProps name ={name} lastname="Casu"/>);

        expect(getByTestId("test-tittle").innerHTML).toContain(name);
        
    })

    test('Debe mostrar el apellido mostrado por props', () => {
        const name="Gianluca";
        const lastname = "Casu";

        const {getByTestId} =  render(<EjercicioProps name={name} lastname={lastname} />)

        expect( getByTestId("test-p").innerHTML ).toBe(lastname);

    } )

    
    
    
});
