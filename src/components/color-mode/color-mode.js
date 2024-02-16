import React, { useEffect, useState } from "react";

const ColorMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleChange = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    console.log("o nosso valor é", isDarkMode);
  }, [isDarkMode]);

  return (
    <div>
      <input
        type="checkbox"
        class="checkbox"
        id="chk"
        checked={isDarkMode}
        onChange={handleChange}
      />
      <label class="label" for="chk">
        <i class="fas fa-moon"></i>
        <i class="fas fa-sun"></i>
        <div class="ball"></div>
      </label>
    </div>
  );
};
export default ColorMode;
