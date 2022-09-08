import {retornaArreglo} from "../../src/base-pruebas/07-deses-arr";

describe('Prueba de archivo 07-des', () => {

    test('Debe de retornar un string y unos números', ()=>{

         const [letters, number] = retornaArreglo();

        expect( letters ).toEqual( 'ABC' );
        expect( number ).toBe( 123 );

        expect( typeof letters ).toBe("string");
        expect ( typeof number ).toBe("number");

        expect( letters ).toEqual( expect.any( String ) );

    })
    
})
