import {getImagen} from "../../src/base-pruebas/11-async-await"

describe('Pruebas en 11-async-await', () => {
    test('La función get imagen debe devolver una url de una imagen (STRING)', async () => {
        const url = await getImagen();
        console.log( url );
        expect( typeof url ).toBe( 'string' );
    })
    
})
