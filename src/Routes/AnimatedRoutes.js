import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PurchaseOrder from "../Pages/PurchaseOrder";
import Category from "../Components/Category";
import SearchPO from "../Pages/SearchPO";
import ChartSample from "../Components/ChartSample";
import ItemCategory from "../Pages/ItemCategory";
import Department from "../Components/Department";
import ItemsTable from "../Components/ItemsTable";

function AnimatedRoutes(props) {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/"></Route>
        <Route path="/po" element={<PurchaseOrder />}></Route>
        <Route path="/po-report" element={<SearchPO />}></Route>
        <Route path="/chart" element={<ChartSample />}></Route>
        <Route path="/po/items" element={<ItemCategory />}></Route>

        {/* DELETE AFTER */}
        <Route path="/sample" element={<ItemsTable />}></Route>

        <Route path="/dept" element={<Department />}></Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
