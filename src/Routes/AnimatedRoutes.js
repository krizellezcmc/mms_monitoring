import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { AnimatePresence } from "framer-motion";
import PurchaseOrder from "../Pages/PurchaseOrder";
import POReport from "../Components/POReport";

function AnimatedRoutes(props) {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/"></Route>
        <Route path="/po" element={<PurchaseOrder />}></Route>{" "}
        <Route path="/po-report" element={<POReport />}></Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
