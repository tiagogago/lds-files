import React, { useEffect, useState } from "react";
import ColorMode from "../src/components/color-mode/color-mode";

function Home() {
  const [userLogado, setUserLogado] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      // alert("Você precisa estar logado para acessar essa página");
    } else {
      const user = JSON.parse(localStorage.getItem("userLogado"));
      setUserLogado(user);
    }
  }, []);

  function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("userLogado");
  }

  return (
    <div>
    <ColorMode />
      {userLogado ? <p id="logado">Olá {userLogado.nome}</p> : null}
      <button onClick={sair}>Sair</button>
    </div>
  );
}

export default Home;
