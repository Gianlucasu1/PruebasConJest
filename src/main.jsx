import React from "react";
import ReactDOM from "react-dom/client";
import {App} from "./components/App"
import { FirstApp } from "./components/FirstApp";
import { Navbar } from "./components/Navbar";
import "./styles.css";
import {EjercicioProps} from "./components/EjercicioProps"
import {CounterApp} from "./components/CounterApp"
import {GridExample} from "./components/GridExample"  





ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Navbar/>
        <div className="container">
            <div></div>
            <div>
                <CounterApp value= {20}/>
            </div>
            
        </div>
        
        {//<App/> 
        //<EjercicioProps name="Gianluca" lastname="Casu"/>
        //<FirstApp/>
        
        
        //<FirstApp/>
        //<GridExample/>
        }
        

    </React.StrictMode>
);