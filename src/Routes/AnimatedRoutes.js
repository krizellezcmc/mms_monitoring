import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PurchaseOrder from "../Pages/PurchaseOrder";
import Category from "../Components/Category";
import SearchPO from "../Pages/SearchPO";
import ChartSample from "../Components/ChartSample";
import ItemCategory from "../Pages/ItemCategory";
import Table from "../Components/TableSample";
import Department from "../Pages/Department";
import DepartmentReport from "../Components/DepartmentReport";
import MonthlyDistribution from "../Components/Reports/MontlyDistribution";
import DailyReport from "../Components/Reports/DailyReport";
import ReportMonthly from "../Pages/ReportMonthly";

function AnimatedRoutes(props) {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/"></Route>
        <Route path="/po" element={<PurchaseOrder />}></Route>
        <Route path="/po-report" element={<SearchPO />}></Route>
        <Route path="/chart" element={<ChartSample />}></Route>
        <Route path="/po/items" element={<ItemCategory />}></Route>
        <Route path="/issuance" element={<ItemCategory />}></Route>
        <Route path="/dept" element={<Department />}></Route>
        <Route path="/deptreport" element={<DepartmentReport />}></Route>
        {/* REPORTS */}{" "}
        <Route
          path="/report/monthly-distribution"
          element={<ReportMonthly />}
        ></Route>
        <Route path="/dailyrep" element={<DailyReport />}></Route>
        {/* DELETE AFTER */}
        <Route path="/sample" element={<Table />}></Route>
        <Route path="/category" element={<Category />}></Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
