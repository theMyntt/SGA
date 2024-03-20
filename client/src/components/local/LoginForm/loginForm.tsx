import React from "react";
import Button from "@/components/shared/Button/button";
import Input from "@/components/shared/Input/input";
import AxiosPost from "@/utils/axiosPost";
import dotenv from "dotenv";

import "./loginForm.scss";

export default function LoginForm(): JSX.Element {
  // dotenv.config();

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const email: string = (document.getElementById("email") as HTMLInputElement).value;
    const password: string = (document.getElementById("password") as HTMLInputElement).value;
    const schoolId: number = parseInt((document.getElementById("school_id") as HTMLInputElement).value);

    const postData = {
      EMAIL_USER: email,
      PASSWORD_USER: password,
      SCHOOL_ID_SCHOOL: schoolId
    };

    const props = {
      url: `http://localhost:5000/api/users/login`
    };

    AxiosPost(postData, props)
      .then((response) => {
        console.log("Resposta do servidor:", response);
      })
      .catch((error) => {
        console.error("Erro durante a solicitação:", error);
      });
  }

  return (
    <form autoComplete="off" id="loginForm" onSubmit={(e) => submit(e)}>
      <h2>Que tal fazer login?</h2>
      <div className="flex between">
        <div className="two-flex-boxes-form">
          <label htmlFor="email">Email: </label>
          <Input type="email" id="email" name="EMAIL_USER" />
        </div>
        <div className="two-flex-boxes-form">
          <label htmlFor="school_id">Código da Escola: </label>
          <Input type="number" id="school_id" name="SCHOOL_ID_SCHOOL" />
        </div>
      </div>
      <div>
        <label htmlFor="password">Senha: </label>
        <Input type="password" id="password" name="PASSWORD_USER" />
      </div>
      <Button children="Entrar" type="submit" />
    </form>
  );
}