import React, { useEffect, useState } from "react";
import CheckLocalStorage from "@/utils/checkLocalStorageNull";
import Header from "@/components/shared/Header/header";
import { CapitalizeName, CapitalizeOneLetter } from "@/utils/capitalize";
import axios, { AxiosResponse } from "axios";
import { dev } from "@config/environment";

export default function Home(): JSX.Element {
  const [schoolInfo, setSchoolInfo] = useState<any[]>([]);

  useEffect(() => {
    CheckLocalStorage();

    async function getInfo(): Promise<void> {
      try {
        const schoolId = localStorage.getItem("school");
        if (schoolId) {
          const response: AxiosResponse<any> = await axios.get(
            `http://${dev.baseUrl + dev.port + dev.routes.getSchoolInfoRoute}`,
            { params: { id: schoolId } }
          );
          setSchoolInfo(response.data[0]);
          console.log(response);
        }
      } catch (error) {
        console.error("Erro ao obter informações da escola:", error);
      }
    }

    getInfo();
  }, []);

  return (
    <div className={`${window.localStorage.getItem("theme")}`}>
      <Header />
      <div className="app-screen">
        <h2>
          Bem vindo, {CapitalizeOneLetter(localStorage.getItem("name") ?? "")}
        </h2>
        <p>O que quer fazer hoje?</p>
        <br />

        <div className="student-info card">
          <h2>Indentificação do aluno.</h2>
          <div>
            <p>Id do Aluno:</p>
            <p className="card">{localStorage.getItem("id") ?? ""}</p> <br/>
            <p>Nome:</p>
            <p className="card"> 
              {CapitalizeName(
                localStorage.getItem("name") ?? "",
                localStorage.getItem("lastName") ?? ""
              )}
            </p> <br/>
            <p>Escola:</p>
            <p className="card">{schoolInfo.length > 1 ? schoolInfo[1] : ""}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
