import { MenuIcon } from "lucide-react";
import "./header.scss";
import { useState } from "react";
import ClearLocalStorage from "@/utils/clearLocalStorage";

export default function Header(): JSX.Element {
  const [onOrOff, setOnOrOff] = useState<boolean>(false);
  const [theme, setTheme] = useState<boolean>(false);

  const changeMenuVisibility = (): void => {
    setOnOrOff(!onOrOff);
  };

  const handleSetTheme: () => void = (): void => {
    setTheme(!theme);
    localStorage.removeItem("theme");
    localStorage.setItem("theme", theme ? "dark" : "light");
  }

  return (
    <div className={`header ${localStorage.getItem('theme')}`}>
      <div style={{color: "inherit"}}>
        <a id="logo" href="/home" style={{color: "inherit"}}>
          SGA Online
        </a>
      </div>
      <div>
        <MenuIcon onClick={() => changeMenuVisibility()} />
        <div className={`menu ${onOrOff}`}>
          <ul>
            <li>
              <a href="/home">Início</a>
            </li>
            <li>
              <a href="/about">Sobre</a>
            </li>
            <li>
              <a href="/" onClick={ClearLocalStorage}>
                Sair
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
