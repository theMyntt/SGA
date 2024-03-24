import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "@pages/Home/home";
import Login from "@pages/Login/login";
import Error from "@pages/Error/err";

export default function Router(): JSX.Element {
  return (
    <div id="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/*" element={<Error name="Erro 404" />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
