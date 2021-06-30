import React from "react";
import "./Navbar.css";

function Navbar(props){
    return(
         <div className="navbar-container">
             <h3 className="navbar-logo">FitCenter</h3>
             <ul className="navbar-items">
               <li className="navbar-item"><a href="#" className="navbar-link">Home</a></li>
               <li className="navbar-item"><a href="#" className="navbar-link">Atividades</a></li>
               <li className="navbar-item"><a href="#" className="navbar-link">Preços</a></li>
               <li className="navbar-item"><a href="#" className="navbar-link">Contato</a></li>
             </ul>
         </div>
    )
}
export default Navbar;