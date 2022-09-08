import {getUser, getUsuarioActivo} from "../../src/base-pruebas/05-funciones";

describe('Pruebas 05 en funciones', () => {

    test('get User debe retornar un objeto', () => {

        const testUser = {
            uid : "ABC123",
            username : "El_Papi1502"
        }

        const user = getUser();
        
        
        expect( testUser ).toStrictEqual( user );

        }
    )

    test('Get usuario debe retornar un objeto', ()=>{
        const name = "Gianluca";

        const user = getUsuarioActivo( name );
        
        expect( user ).toEqual( {
            uid :'ABC567',
            username:name
        } );
        console.log(user);
    })
    
})
