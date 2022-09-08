import {getHeroeById} from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas 08 importar datos ', () => {
    
    test('La función getHeroeById debe retornar un heroe después de recibir un ID', ()=>{

        const id=2;
        const hero = getHeroeById( id );
        console.log( hero );

        expect( hero ).toEqual ({ id: 2, name: 'Spiderman', owner: 'Marvel' });

    })

})
