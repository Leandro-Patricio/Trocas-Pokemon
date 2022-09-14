import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./WebPages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Navigate to="/Home" replace />} />
        {/*         <Route
          path="/*"
          element={<Navigate to="/Home" replace />}
        /> */}
        <Route path="/Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
