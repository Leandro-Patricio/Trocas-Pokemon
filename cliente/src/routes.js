import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./WebPages/Home";
import { Loading } from "./functions/Loading/Loading";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Navigate to="/Loading" replace />} />
        {/*         <Route
          path="/*"
          element={<Navigate to="/Home" replace />}
        /> */}
        {/*   <Route path="/Home" element={<Home />} /> */}
        <Route path="/Loading" element={<Loading />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
