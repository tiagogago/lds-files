import React from "react";

import "../css/registro.css";

function App1() {
  return (
    <>
      <div class="container">
        <div class="card">
          <h1>Resgistro</h1>

          <div id="msgError"></div>
          <div id="msgSuccess"></div>

          <div class="label-float">
            <input type="text" id="nome" placeholder=" " required />
            <label id="labelNome" for="nome">
              Nome
            </label>
          </div>

          <div class="label-float">
            <input type="text" id="usuario" placeholder=" " required />
            <label id="labelUsuario" for="usuario">
              Usuário
            </label>
          </div>

          <div class="label-float">
            <input type="password" id="senha" placeholder=" " required />
            <label id="labelSenha" for="senha">
              Senha
            </label>
            <i id="verSenha" class="fa fa-eye" aria-hidden="true"></i>
          </div>

          <div class="label-float">
            <input type="password" id="confirmSenha" placeholder=" " required />
            <label id="labelConfirmSenha" for="confirmSenha">
              Confirmar Senha
            </label>
            <i id="verConfirmSenha" class="fa fa-eye" aria-hidden="true"></i>
          </div>

          <div class="justify-center">
            <button onclick="concluir_registro()">Concluir Registo</button>
          </div>
        </div>
      </div>
      <script src="../components/singup_js.js"></script>
    </>
  );
}

export default App1;
