import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PurchaseOrder from "../Pages/PurchaseOrder";
import POReport from "../Components/POReport";
import Category from "../Components/Category";
import SearchPO from "../Pages/SearchPO";
import Chart from "../Components/ChartSample";
import ChartSample from "../Components/ChartSample";

function AnimatedRoutes(props) {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/"></Route>
        <Route path="/po" element={<PurchaseOrder />}></Route>
        <Route path="/po-report" element={<POReport />}></Route>
        <Route path="/category" element={<Category />}></Route>
        <Route path="/po-report" element={<SearchPO />}></Route>{" "}
        <Route path="/chart" element={<ChartSample />}></Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
