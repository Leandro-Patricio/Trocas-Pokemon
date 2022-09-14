import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LandingPage from "./webPages/LandingPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          exact
          element={<Navigate to="/Seja_bem_vindo_a_minha_pagina" replace />}
        />
        <Route
          path="/*"
          element={<Navigate to="/Seja_bem_vindo_a_minha_pagina" replace />}
        />
        <Route
          path="/Seja_bem_vindo_a_minha_pagina"
          element={<LandingPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
