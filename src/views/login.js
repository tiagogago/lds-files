import React, { useState } from "react";
import "../css/login.css";

function Login() {
  const [inputType, setInputType] = useState("password");
  const [userValid, setUserValid] = useState(null);
  const [msgError, setMsgError] = useState("");

  const listaUser = JSON.parse(localStorage.getItem("listaUser")) || [];

  function handleEyeClick() {
    setInputType((prevInputType) =>
      prevInputType === "password" ? "text" : "password"
    );
  }

  function handleSubmit(event) {
    event.preventDefault();

    const usuario = event.target.usuario.value;
    const senha = event.target.senha.value;

    const user = listaUser.find(
      (item) => item.userCad === usuario && item.senhaCad === senha
    );

    if (user) {
      setUserValid({
        nome: user.nomeCad,
        user: user.userCad,
        senha: user.senhaCad,
      });

      let mathRandom = Math.random().toString(16).substr(2);
      let token = mathRandom + mathRandom;

      localStorage.setItem("token", token);
      localStorage.setItem("userLogado", JSON.stringify(user));

      window.location.href = "../index-site-sud.html";
    } else {
      setMsgError("Usuário ou senha incorretos");
      event.target.usuario.focus();
    }

    event.target.usuario.style.borderColor = "red";
    event.target.senha.style.borderColor = "red";
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
          <div className="label-float">
            <label htmlFor="usuario">Usuário:</label>

            <input type="text" id="usuario" name="usuario" />
          </div>

          <div className="label-float">
            <label htmlFor="senha">Senha:</label>
            <input type={inputType} id="senha" name="senha" />
            <i className="fa-eye" onClick={handleEyeClick}></i>
          </div>

          <div className="justify-center">
            <button type="submit">Entrar</button>
          </div>

          <div class="justify-center">
            <hr />
          </div>

          {msgError && (
            <p style={{ display: "block", color: "red" }}>{msgError}</p>
          )}

          <p>
            Não tem uma conta?
            <a href="#"> Registra-se </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
