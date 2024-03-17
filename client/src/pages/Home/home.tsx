import { useEffect } from "react";
import CheckLocalStorage from "@/utils/checkLocalStorageNull";

export default function Home(): JSX.Element {
  useEffect(() => {
    CheckLocalStorage();
  }, []);

  return(
    <div> oi</div>
  )
}