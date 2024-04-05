import React from "react";
import Button from "@/components/shared/Button/button";
import Input from "@/components/shared/Input/input";
import AxiosPost from "@/utils/axiosPost";
// import dotenv from "dotenv";
import {dev} from "@config/environment";

import "./loginForm.scss";

export default function LoginForm(): JSX.Element {
  async function submit(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    const email: string = (document.getElementById("email") as HTMLInputElement).value;
    const password: string = (document.getElementById("password") as HTMLInputElement).value;
    const schoolId: number = parseInt((document.getElementById("school_id") as HTMLInputElement).value);

    const postData = {
      EMAIL_USER: email,
      PASSWORD_USER: password,
      SCHOOL_ID_SCHOOL: schoolId
    };

    const result = await AxiosPost(postData, `http://${dev.baseUrl + dev.port + dev.routes.getUserInfoRoute}`);
    console.log(result.length)

    if (result.length != 0) {
      window.localStorage.setItem("id", result[0][0]);
      window.localStorage.setItem("email", result[0][1]);
      window.localStorage.setItem("password", result[0][2]);
      window.localStorage.setItem("name", result[0][4]);
      window.localStorage.setItem("lastName", result[0][5]);
      window.localStorage.setItem("school", result[0][6]);

      location.href = "/home"
    } else {
      alert("Não cadastrado");
    }
  }

  return (
    <form autoComplete="off" id="loginForm" onSubmit={(e) => submit(e)}>
      <div className="flex between">
        <div className="two-flex-boxes-form">
          <label htmlFor="email">Email: </label>
          <Input type="email" id="email" name="EMAIL_USER" />
        </div>
        <div className="two-flex-boxes-form">
          <label htmlFor="school_id">Código da Escola: </label>
          <Input type="number" id="school_id" name="SCHOOL_ID_SCHOOL" min="0"/>
        </div>
      </div>
      <div>
        <label htmlFor="password">Senha: </label>
        <Input type="password" id="password" name="PASSWORD_USER" />
      </div>
      <Button children="Entrar" type="submit"/>
    </form>
  );
}
