import axios, { AxiosResponse } from "axios";

interface Data {
  EMAIL_USER: string;
  PASSWORD_USER: string;
  CELLPHONE_USER?: string | "";
  NAME_USER?: string | "";
  SCHOOL_ID_SCHOOL: number;
}


export default async function AxiosPost(data: Data, url: string): Promise<any> {
  return await axios.post(url, data)
    .then((response: AxiosResponse) => response.data)
    .catch((error) => { throw error; });
}