import axios, { AxiosResponse } from "axios";

interface Props {
  url: string;
  data: string;
}

export default function AxiosPost(props: Props) {
  try {
    axios.post(props.url, props.data)
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