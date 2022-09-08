describe('Pruebas en <DemoComponent />', () => {

    test("Esta prueba no puede fallar", ()=>{
    
        //inicilización
        const message1 = "Hola mundo";
        //estímulos
        const message2 = message1.trim();
        //observar comportamiento
        expect(message1).toBe(message2);
    })
})



