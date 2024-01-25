import React, { useEffect, useState } from "react";

function App() {
  const [userLogado, setUserLogado] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Você precisa estar logado para acessar essa página");
      window.location.href = "../Apps/App.js";
    } else {
      const user = JSON.parse(localStorage.getItem("userLogado"));
      setUserLogado(user);
    }
  }, []);

  function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("userLogado");
    window.location.href = "../Apps/App.js";
  }

  return (
    <div>
      {userLogado ? <p id="logado">Olá {userLogado.nome}</p> : null}
      <button onClick={sair}>Sair</button>
    </div>
  );
}

export default App;
