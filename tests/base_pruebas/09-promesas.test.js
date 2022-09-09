import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas"

describe('Prueba de 09- Obtención de datos con promesas ', () => {

    test('getHeroeByIdAsync debe devolver un heroe en forma de objeto', ( done ) =>{
        const id = 100;
        getHeroeByIdAsync( id )
            .then( ( hero ) => { 

                
                expect( hero  ).toEqual( {
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                } );
                done();
                

            } ).catch( error => {
                expect( error ).toBe('No se pudo encontrar el héroe número' + id);
                done();
            } )
    })

    
    
    
})
