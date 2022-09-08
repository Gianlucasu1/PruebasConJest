import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Archivo de pruebas de template strings', () => {

    test("get saludo debe de retornar 'hola Gianluca'",()=>{
        
        const name = "Gianluca";
        const message = getSaludo( name );

        expect( message ).toEqual("Hola Gianluca");
        
    })
    
})
