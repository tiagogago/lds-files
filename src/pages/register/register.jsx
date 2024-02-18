import React, { useState } from "react";
import "./register.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
function Register() {
  const [nome, setNome] = useState("");
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");
  const [validNome, setValidNome] = useState(false);
  const [validUsuario, setValidUsuario] = useState(false);
  const [validSenha, setValidSenha] = useState(false);
  const [validConfirmSenha, setValidConfirmSenha] = useState(false);
  const [msgError, setMsgError] = useState("");
  const [msgSuccess, setMsgSuccess] = useState("");

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleNomeChange = (e) => {
    if (e.target.value.length <= 2) {
      setLabelNome("Nome *Insira no minimo 5 caracteres");
      setValidNome(false);
    } else {
      setLabelNome("Nome");
      setValidNome(true);
    }
    setNome(e.target.value);
  };

  const handleUsuarioChange = (e) => {
    if (e.target.value.length <= 4) {
      setLabelUsuario("Usuário *Insira no minimo 5 caracteres");
      setValidUsuario(false);
    } else {
      setLabelUsuario("Usuário");
      setValidUsuario(true);
    }
    setUsuario(e.target.value);
  };

  const handleSenhaChange = (e) => {
    if (e.target.value.length <= 5) {
      setLabelSenha("Senha *Insira no minimo 6 caracteres");
      setValidSenha(false);
    } else {
      setLabelSenha("Senha");
      setValidSenha(true);
    }
    setSenha(e.target.value);
  };

  const handleConfirmSenhaChange = (e) => {
    if (senha !== e.target.value) {
      setLabelConfirmSenha("Confirmar Senha *As senhas não conferem");
      setValidConfirmSenha(false);
    } else {
      setLabelConfirmSenha("Confirmar Senha");
      setValidConfirmSenha(true);
    }
    setConfirmSenha(e.target.value);
  };

  const handleConcluirRegistro = () => {
    if (validNome && validUsuario && validSenha && validConfirmSenha) {
      let listaUser = JSON.parse(localStorage.getItem("listaUser") || "[]");

      listaUser.push({
        nomeCad: nome,
        userCad: usuario,
        senhaCad: senha,
      });

      localStorage.setItem("listaUser", JSON.stringify(listaUser));

      setMsgSuccess("<strong>A registrar usuário...</strong>");
      setMsgError("");
    } else {
      setMsgError(
        "<strong>Preencha todos os campos corretamente antes de se resgistrar</strong>"
      );
      setMsgSuccess("");
    }
  };

  const [labelNome, setLabelNome] = useState("Nome");
  const [labelUsuario, setLabelUsuario] = useState("Usuário");
  const [labelSenha, setLabelSenha] = useState(
    "Senha *Insira no minimo 6 caracteres"
  );
  const [labelConfirmSenha, setLabelConfirmSenha] = useState("Confirmar Senha");

  return (
    <>
      <title>Vila Franca de Xira - Registra-se</title>
      <div className="register-container">
        <div className="register-card">
          <div className="register__h1">
            <h1>Registrar</h1>
          </div>
          <div className="register__label-float">
            <label htmlFor="nome">{labelNome}</label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={handleNomeChange}
            />
          </div>
          <div className="register__label-float">
            <label htmlFor="usuario">{labelUsuario}</label>
            <input
              type="text"
              id="usuario"
              value={usuario}
              onChange={handleUsuarioChange}
            />
          </div>
          <div className="register__label-float">
            <label htmlFor="senha">{labelSenha}</label>
            <input
              type={showPassword ? "text" : "password"}
              id="senha"
              value={senha}
              onChange={handleSenhaChange}
            />{" "}
            <i className="fa-eye" onClick={togglePasswordVisibility}>
              {showPassword ? (
                <FontAwesomeIcon className="fa-eye" icon={faEyeSlash} />
              ) : (
                <FontAwesomeIcon className="fa-eye" icon={faEye} />
              )}
            </i>
          </div>

          <div className="register__label-float">
            <label htmlFor="confirmSenha">{labelConfirmSenha}</label>
            <input
              type={showPassword ? "text" : "password"}
              id="confirmSenha"
              value={confirmSenha}
              onChange={handleConfirmSenhaChange}
            />
          </div>
          <div className="register__justify-center">
            {" "}
            <button
              className="register__button"
              onClick={handleConcluirRegistro}
            >
              Registrar
            </button>
          </div>
          <div style={{ color: "green" }} id="msgSuccess">
            {msgSuccess}
          </div>
          <div style={{ color: "red" }} id="msgError">
            {msgError}
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;