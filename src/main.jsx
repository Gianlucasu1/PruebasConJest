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
        //<EjercicioProps name="Gianluca" lastname="Casu"/>
        
        {//<App/> 
        //<FirstApp/>
        
        //<CounterApp value= {0}/>
        //<FirstApp/>
        //<GridExample/>
        }

    </React.StrictMode>
);