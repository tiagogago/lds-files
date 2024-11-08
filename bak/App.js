import React from "react";
import "../Css/login.css";

function App() {
  return (
    <>
      <header>
        <div className="container">
          <div class="card">
            <h1>Login</h1>

            <div id="msgError"></div>

            <div class="label-float">
              <input type="text" id="usuario" placeholder="" required />
              <label id="userLabel" for="usuario">
                Usuario
              </label>
            </div>

            <div class="label-float">
              <input type="password" id="senha" placeholder="" required />
              <label id="senhaLabel" for="senha">
                Senha
              </label>
              <i class="fa fa-eye" aria-hidden="true"></i>
            </div>

            <div class="justify-center">
              <button onClick="entrar()">Entrar</button>
            </div>

            <div class="justify-center">
              <hr />
            </div>

            <p>
              Não tem uma conta?
              <a href="./App1.js"> Registra-se </a>
            </p>
          </div>
        </div>
        <script src="../components/login_js.js"></script>
      </header>
    </>
  );
}

export default App;
