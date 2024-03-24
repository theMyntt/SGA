import Header from "@/components/shared/Header/header";

import "./err.scss"

interface Props {
  name: string;
}

export default function Error(props: Props) {
  return (
    <div className="error">
      <Header />
      <div className="app-screen error-container">
        <h1>{props.name}</h1>
        <a href={
          window.localStorage.getItem("name")? "/home" : "/"
        }>
          {
            window.localStorage.getItem("name")
             ? "Voltar para o início."
              : "Voltar para a tela de login."
          }
        </a>
      </div>
    </div>
  );
}
