import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PurchaseOrder from "../Pages/PurchaseOrder";
import Category from "../Components/Category";
import SearchPO from "../Pages/SearchPO";
import ChartSample from "../Components/ChartSample";
import ItemCategory from "../Pages/ItemCategory";
import ItemsTable from "../Components/ItemsTable";
import Table from "../Components/TableSample";
import Department from "../Pages/Department";
import DepartmentReport from "../Components/DepartmentReport";
import MainLayout from "../Pages/Main_Layout";

function AnimatedRoutes(props) {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/"></Route>
        <Route path="m/po/po" element={<PurchaseOrder />}></Route>
        <Route path="m/po/po-report" element={<SearchPO />}></Route>
        <Route path="m/po/chart" element={<ChartSample />}></Route>

        <Route path="m/po/items" element={<ItemCategory />}></Route>
        <Route path="m/po/issuance" element={<ItemCategory />}></Route>
        <Route path="m/po/dept" element={<Department />}></Route>
        <Route path="m/po/deptreport" element={<DepartmentReport />}></Route>

        <Route path="m/po/sample" element={<Table />}></Route>
        <Route path="m/po/category" element={<Category />}></Route>
        <Route path="/m/*" element={<MainLayout />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
