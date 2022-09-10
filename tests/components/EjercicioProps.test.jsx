/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import { EjercicioProps } from "../../src/components/EjercicioProps"

describe('Pruebas en <EjercicioProps />', () => {

    test('Debe hacer match con el snapshot ',() => {
        
        render( <EjercicioProps name="Gianluca" lastname="Casu"/> );

    });
    
    
});
