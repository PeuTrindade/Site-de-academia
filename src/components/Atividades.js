import React from "react";
import "./Atividades.css";

function Atividades(props){
    return(
       <div className="atividades-container">
          <h2 className="atividades-txt">Veja nossas atividades</h2>
          <div className="dq">
          <div className="atividade">
             <img className="atividade-img" src="../images/cross.jpg"></img>
             <h5 className="atividade-title">CrossFit</h5>
             <p className="atividade-desc">Venha fazer CrossFit com excelentes personais</p>
             <button className="atividade-button">Ver mais</button>
          </div>
          <div className="atividade">
             <img className="atividade-img" src="../images/musc.jpg"></img>
             <h5 className="atividade-title">Musculação</h5>
             <p className="atividade-desc">Venha fazer musculação com excelentes personais</p>
             <button className="atividade-button">Ver mais</button>
          </div>
          <div className="atividade">
             <img className="atividade-img" src="../images/box.jpg"></img>
             <h5 className="atividade-title">Boxe</h5>
             <p className="atividade-desc">Venha fazer boxe com excelentes lutadores</p>
             <button className="atividade-button">Ver mais</button>
          </div>
          <div className="atividade">
             <img className="atividade-img" src="../images/danca.jpg"></img>
             <h5 className="atividade-title">Dança</h5>
             <p className="atividade-desc">Venha fazer dança com excelentes dançarinos</p>
             <button className="atividade-button">Ver mais</button>
          </div>
          </div>
       </div>
    )
}
export default Atividades;