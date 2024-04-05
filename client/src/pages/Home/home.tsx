import { useEffect } from "react";
import CheckLocalStorage from "@/utils/checkLocalStorageNull";
import Header from "@/components/shared/Header/header";
import { CapitalizeName, CapitalizeOneLetter } from "@/utils/capitalize";

export default function Home(): JSX.Element {
  useEffect(() => {
    CheckLocalStorage();
  }, []);

  return (
    <div>
      <Header />
      <div className="app-screen">
        <h2>
          Bem vindo, {CapitalizeOneLetter(window.localStorage.getItem("name") ?? "")}
        </h2>
        <p>O que quer fazer hoje?</p>

        <div className="student-info card">
          <h2>Indentificação do aluno.</h2>
          <div>
            <p>Nome:</p>
            <p>{CapitalizeName(localStorage.getItem("name") ?? "", localStorage.getItem("lastName") ?? "")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
