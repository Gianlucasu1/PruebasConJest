/**
 * @jest-environment jsdom
 */

import React from "react"
import { render, screen, fireEvent, getByText } from "@testing-library/react";
import {CounterApp} from "../../src/components/CounterApp"


describe('Pruebas en el componente CounterApp', () => {
    const initial_value = 10;


    test('Debe hacer match con el snapshot', () => {
        const {container} = render(<CounterApp 
            value={initial_value}
        />)

        expect( container ).toMatchSnapshot();
    })

    test('Debe incrementar con cada botón +1', () => {  

        render(<CounterApp 
            value={initial_value}
        />)

        fireEvent.click(screen.getByText('+1'));
        screen.debug();
        expect( screen.getByTestId('counter-test').innerHTML).toContain('11');
        
    })

    test('Debe funcionar el botón de Reset', () => {  

        render(<CounterApp 
            value={initial_value}
        />)
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));    
        fireEvent.click(screen.getByRole( 'button', { name: 'RESET' } ));
        expect( screen.getByTestId("counter-test").innerHTML ).toContain(initial_value.toString());

    })
    

    
    
    
})
