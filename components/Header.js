import React, { useContext } from "react";
import { ThemeContext } from "../context/Theme";

const Header = ({ title }) => {
  let { theme, setTheme } = useContext(ThemeContext);

  return (
    <nav className="nav-wrapper light-blue darken-3">
      <a className="brand-logo center" href="#!">
        {title}
      </a>
      <div style={{ marginLeft: "5px" }}>
        <small onClick={() => setTheme("white")}>tema claro</small>&nbsp;|&nbsp;
        <small onClick={() => setTheme("brown")}>tema oscuro</small>
      </div>
    </nav>
  );
};

export default Header;
