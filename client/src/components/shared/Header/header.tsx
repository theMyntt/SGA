import { MenuIcon } from "lucide-react";
import "./header.scss"
import { useState } from "react";
import ClearLocalStorage from "@/utils/clearLocalStorage";

export default function Header(): JSX.Element {
  const [onOrOff, setOnOrOff] = useState<boolean>(false);

  const changeMenuVisibility = (): void => {
    setOnOrOff(!onOrOff);
  }

  return (
    <div className="header">
      <div>
        <a id="logo" href="/home">SGA Online</a>  
      </div>   
      <div>
        <MenuIcon onClick={() => changeMenuVisibility()} />
        <div className={`menu ${onOrOff}`}>
          <ul>
            <li><a href="/about">Sobre</a></li>
            <li><a href="/" onClick={ClearLocalStorage}>Sair</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}