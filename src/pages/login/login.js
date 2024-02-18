import React, { useState } from "react";
import "../login/login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Auth } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [inputType, setInputType] = useState("password");
  const [userValid, setUserValid] = useState(null);
  const [msgError, setMsgError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const listaUser = JSON.parse(localStorage.getItem("listaUser")) || [];

  function handleEyeClick() {
    setInputType((prevInputType) =>
      prevInputType === "password" ? "text" : "password"
    );
  }

  function handleFormSubmit(event) {
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
    } else {
      setMsgError("Usuário ou senha incorretos");
      event.target.usuario.focus();
    }

    event.target.usuario.style.borderColor = "red";
    event.target.senha.style.borderColor = "red";
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <form onSubmit={handleFormSubmit}>
          <div className="login__h1">
            <h1>Login</h1>
          </div>

          <div className="login__label-float">
            <label htmlFor="usuario">Usuário:</label>

            <input type="text" id="usuario" name="usuario" />
          </div>

          <div className="login__label-float">
            <label htmlFor="senha">Senha:</label>
            <input
              type={showPassword ? "text" : "password"}
              id="senha"
              name="senha"
            />
            <i className="fa-eye" onClick={togglePasswordVisibility}>
              {showPassword ? (
                <FontAwesomeIcon className="fa-eye" icon={faEyeSlash} />
              ) : (
                <FontAwesomeIcon className="fa-eye" icon={faEye} />
              )}
            </i>
          </div>

          <div className="login__justify-center">
            <button className="login-button" type="submit">
              Entrar
            </button>
          </div>

          <div className="login__juerstify-cent">
            <hr />
          </div>

          {msgError && (
            <p style={{ display: "block", color: "red" }}>{msgError}</p>
          )}

          <p>
            Não tem uma conta?
            <a href="/register"> Registra-se </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
