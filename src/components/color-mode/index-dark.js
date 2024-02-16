import React, { useState } from "react";
import Dark from "../../css/dark.css"
function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleChange = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <>
      <input
        type="checkbox"
        id="chk"
        checked={isDarkMode}
        onChange={handleChange}
      />
      <label htmlFor="chk">Dark Mode</label>

      {isDarkMode && (
        <style jsx global>{`
          body {
            background-color: #333;
            color: #fff;
          }
        `}</style>
      )}
    </>
  );
}

export default DarkModeToggle;
