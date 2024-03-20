import LoginForm from "@/components/local/LoginForm/loginForm";

import "./login.scss"

export default function Login(): JSX.Element {
  return (
    <div className="container" id="login">
      <h2 className="to-center">Fazer login.</h2>
      <div className="card">
        <LoginForm />
      </div>
    </div>
  );
}
