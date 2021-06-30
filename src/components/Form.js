import React from "react";
import "./Form.css";

function Form(props){
    function enviarMsg(){
        let n = document.getElementById("nome").value;
        let s = document.getElementById("sobrenome").value;
        let e = document.getElementById("email").value;
        let m = document.getElementById("msg").value ;
        let h = document.getElementById("b");

        if (n == ""){
            h.innerHTML = "Campos vazios!"
        }
        if (s == ""){
            h.innerHTML = "Campos vazios!"
        }
        if(e == ""){
            h.innerHTML = "Campos vazios!"
        }
        if(m==""){
            h.innerHTML = "Campos vazios!"
        }
        else {
            h.innerHTML = "Mensagem enviada com sucesso!"
            alert("Olá, " + n + ". Sua mensagem foi enviada com sucesso!")
        }
    }
    return(
       <>
       <h3 className="form-txt">Alguma dúvida? Preencha o formulário abaixo</h3>
       <div className="form-container">
          <div className="form">
          <input id="nome" type="name" name="name" placeholder="Seu nome"></input> <br></br>
          <input id="sobrenome" type="name" name="name" placeholder="Seu sobrenome"></input> <br></br>
          <input id="email" type="email" name="email" placeholder="Seu email"></input> <br></br>
          <input id="msg" type="text" name="text" placeholder="Sua mensagem"></input> <br></br>
          <button onClick={enviarMsg} className="form-button">Enviar</button>
          <h3 id="b"></h3>
          </div>
       </div>
       </>
    )
}
export default Form;
