import React from "react";
import ReactDOM from "react-dom/client";
import {App} from "./components/App"
import { FirstApp } from "./components/FirstApp";
import { Navbar } from "./components/Navbar";
import "./styles.css";





ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Navbar/>
        <FirstApp/>
        {//<App/> 
        //<FirstApp/>
    }
    </React.StrictMode>
);