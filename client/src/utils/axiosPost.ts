import axios, { AxiosResponse } from "axios";

interface Data {
  EMAIL_USER: string;
  PASSWORD_USER: string;
  CELLPHONE_USER?: string | "";
  NAME_USER?: string | "";
  SCHOOL_ID_SCHOOL: number;
}

interface Props {
  url: string;
}

export default async function AxiosPost(data: Data, props: Props): Promise<any> {
  return await axios.post(props.url, data)
    .then((response: AxiosResponse) => response.data)
    .catch((error) => { throw error; });
}