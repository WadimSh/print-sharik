import { Route, Routes } from "react-router-dom";

import Home from "@/views/Home";
import Orders from "@/views/Orders";

const AllRoutes = () => {
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/orders" element={<Orders />} />
    </Routes>
  );
};

export default AllRoutes;
