import React from "react";

function AccountSettings() {
  return (
    <div className="settings-container">
      <h1>Account Settings</h1>

      <div className="option">
        <label htmlFor="username">Old User:</label>
        <input type="text" id="username" name="username" />
      </div>

      <div className="option">
        <label htmlFor="username">New User:</label>
        <input type="text" id="username" name="username" />
        <button>Salvar</button>
      </div>

      <div className="option">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
      </div>

      <div className="option">
        <label htmlFor="password">Confirm Password:</label>
        <input type="password" id="password" name="password" />
        <button>Salvar</button>
      </div>

      <div className="option">
        <label htmlFor="image">Change Image:</label>
        <input type="file" id="image" name="image" />
        <button>Salvar</button>
      </div>

      <div className="option">
        <label htmlFor="email">Change E-mail:</label>
        <input type="email" id="email" name="email" />
        <button>Salvar</button>
      </div>

      <div className="option">
        <label htmlFor="location">Location:</label>
        <input type="text" id="location" name="location" />
        <button>Salvar</button>
      </div>

      <div className="option">
        <label htmlFor="location">Cell Phone:</label>
        <input type="text" id="location" name="location" />
        <button>Salvar</button>
      </div>
    </div>
  );
}

export default AccountSettings;
