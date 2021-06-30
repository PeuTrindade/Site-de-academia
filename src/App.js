import React from "react";
import "./App.css"

import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Atividades from "./components/Atividades";
import Form from "./components/Form";

function App(props){
    document.addEventListener("DOMContentLoaded",()=>{
       alert("Seja Bem-Vindo(a)!");
    });
    return(
        <>
        <header>
        <Navbar/>
        </header>
        <main>
        <MainContent/>
        <Atividades/>
        </main>
        <footer>
        <Form/>
        </footer>
        </>
    )
}
export default App;