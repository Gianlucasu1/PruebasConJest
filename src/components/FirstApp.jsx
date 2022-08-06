import { useState } from "react";
import { App } from "./App";




export const FirstApp = () => {

    const [counter, setCounter] = useState(0);
    const [impressions, setImpresions] = useState([]);






    let miNombre = "Gianluca";

    const myFunction = (()=> {

        console.log("The function worked");
        setImpresions(x =>
                [...x, <App/>]
            )
        
    });
    

    return (
        <>  
            <section className="section_1">
                <h1>First app done, congratulations {miNombre}</h1>
                <button onClick={myFunction}>Click here</button>
            </section>
            <div className="section_2">
                {impressions}
            </div>                
        </>
    )
}
