import { useEffect } from "react";
import CheckLocalStorage from "@/utils/checkLocalStorageNull";
import Header from "@/components/shared/Header/header";

export default function Home(): JSX.Element {
  useEffect(() => {
    CheckLocalStorage();
  }, []);

  return (
    <div>
      <Header />
      <div className="app-screen">
        <h2>Bem vindo, {window.localStorage.getItem("name")}</h2>
        <p>O que quer fazer hoje?</p>
      </div>
    </div>
  );
}
