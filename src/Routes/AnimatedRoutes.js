import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
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
import useAuth from "../Hooks/useAuth";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PasswordRecovery from "../Pages/PasswordRecovery";
import PurchaseRequestView from "../Pages/Purchase_Request_View";

const ProtectedRoute = ({ user }) => {
  if (user === null) {
    return <Navigate to="/login" replace />;
  }

  return <Navigate to="m/" replace />;
};

function AnimatedRoutes(props) {
  const { user } = useAuth();

  return (
    <AnimatePresence>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account-recovery" element={<PasswordRecovery />} />
        {/* <Route
          path="/"
          element={
            <ProtectedRoute user={user}> */}
        <Route path="/m/*" element={<MainLayout />} />
        <Route path="m/po/po" element={<PurchaseOrder />}></Route>
        <Route path="m/po/po-report" element={<SearchPO />}></Route>
        <Route path="m/po/chart" element={<ChartSample />}></Route>

        <Route path="m/po/items" element={<ItemCategory />}></Route>
        <Route path="m/po/issuance" element={<ItemCategory />}></Route>
        <Route path="m/po/dept" element={<Department />}></Route>
        <Route path="m/po/deptreport" element={<DepartmentReport />}></Route>

        <Route path="m/po/sample" element={<Table />}></Route>
        <Route path="m/po/category" element={<Category />}></Route>
        <Route path="m/pr/pr-view" element={<PurchaseRequestView />}></Route>
        {/* </ProtectedRoute>
          }
        ></Route> */}
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
