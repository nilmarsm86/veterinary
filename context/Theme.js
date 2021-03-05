import React, { useState } from "react";

export const ThemeContext = React.createContext();

const Theme = (props) => {
  let [theme, setTheme] = useState("white");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default Theme;
