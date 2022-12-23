import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PurchaseOrder from "../Pages/PurchaseOrder";
import SearchPO from "../Components/SearchPO";
import Chart from "../Components/ChartSample";
import ChartSample from "../Components/ChartSample";

function AnimatedRoutes(props) {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/"></Route>
        <Route path="/po" element={<PurchaseOrder />}></Route>
        <Route path="/po-report" element={<SearchPO />}></Route>{" "}
        <Route path="/chart" element={<ChartSample />}></Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
