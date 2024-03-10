import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "@pages/Home/home";

export default function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}