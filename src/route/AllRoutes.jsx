import { Route, Routes } from "react-router-dom";

import Home from "../views/Home/Home";
import Orders from "../views/Orders/Orders";
import ImageGenerator from "../views/ImageGenerator/ImageGenerator";

const AllRoutes = () => {
  
  return (
    <Routes>
      <Route path="/" element={<ImageGenerator />} />
      <Route path="/generate" element={<Home />} />
      <Route path="/orders" element={<Orders />} />
    </Routes>
  );
};

export default AllRoutes;
