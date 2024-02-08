import React from "react";

const Dropdown = () => {
  return (
    <div className="dropdown">
      <button className="dropbtn">Opções</button>
      <div className="dropdown-content">
        <a href="#" className="dropdown-item">
          Log out
        </a>
        <a href="#" className="dropdown-item">
          Definições
        </a>
        <div className="dropdown-submenu">
          <button className="dropdown-item">Modo Dark vs Light</button>
          <div className="dropdown-content">
            <a href="#" className="dropdown-item">
              Dark
            </a>
            <a href="#" className="dropdown-item">
              Light
            </a>
          </div>
        </div>
        <a href="#" className="dropdown-item">
          Lingua
        </a>
      </div>
    </div>
  );
};

export default Dropdown;
