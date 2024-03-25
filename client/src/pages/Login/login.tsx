import LoginForm from "@/components/local/LoginForm/loginForm";

import "./login.scss"
import { useEffect } from "react";

export default function Login(): JSX.Element {
  useEffect(() => {
    if (localStorage.getItem("name") !== null) {
      window.location.href = "/home";
    } 
  })

  return (
    <div className="container" id="login">
      <h2 className="to-center">Fazer login.</h2>
      <div className="card">
        <LoginForm />
      </div>
    </div>
  );
}
