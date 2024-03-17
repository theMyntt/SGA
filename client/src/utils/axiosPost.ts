import axios, { AxiosResponse } from "axios";

interface Data {
  EMAIL_USER: string,
  PASSWORD_USER: string,
  CELLPHONE_USER?: string,
  NAME_USER?: string,
  SCHOOL_ID_SCHOOL: number
}

interface Props {
  url: string;
  data: string[];
  school_id: number
}

export default function AxiosPost(props: Props) {
  const postData:Data = {
    EMAIL_USER: props.data[0],
    PASSWORD_USER: props.data[1],
    CELLPHONE_USER: props.data[2],
    NAME_USER: props.data[3],
    SCHOOL_ID_SCHOOL: props.school_id
  }

  try {
    axios.post(props.url, postData)
    .then((response: AxiosResponse) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    })
  } catch (error) {
    return error;
  }
}