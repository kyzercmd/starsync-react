import { useEffect, useState } from "react";

import Logo from "../assets/logo.png";

export const Header = () => {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || "default"
  );

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="StarSync Logo" />
        <span>StarSync - Align Your Tasks</span>
      </div>
      <div className="themeSelector">
        <span
          onClick={() => setTheme("default")}
          className={theme === "default" ? "default activeTheme" : "default"}
        ></span>
        <span
          onClick={() => setTheme("light")}
          className={theme === "light" ? "light activeTheme" : "light"}
        ></span>
      </div>
    </header>
  );
};
