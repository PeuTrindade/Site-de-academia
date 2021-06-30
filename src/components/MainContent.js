import React from "react";
import "./MainContent.css"

function MainContent(props){
    return(
        <div className="mc-container">
           <h1 className="mc-txt1">SUA SAÚDE É NOSSA PRIORIDADE</h1>
           <p className="mc-txt2">Venha fazer parte da nossa academia. Aqui você recebe todo o apoio necessário para garantir o bem-estar da sua saúde.</p>
           <div className="carrosel">
               <div className="items">
                   <div className="item"><img src="https://news.gympass.com/wp-content/uploads/2017/11/Academia-Bluefit-Gympass-Academias-Super-Estilosas-Blog.jpg"></img></div>
                   <div className="item"><img src="http://www.formacco.com.br/fmanager/formaccon/f_cf_academia_ef_web.jpg"></img></div>
                   <div className="item"><img src="http://geranegocios.com/wp-content/uploads/2019/07/montar-academia-crossfit.png"></img></div>
                   <div className="item"><img src="https://www.recreiodajuventude.com.br/userfiles/redacao/posts/academia-campanha.jpg"></img></div>
               </div>
           </div>
        </div>
    )
}
export default MainContent;