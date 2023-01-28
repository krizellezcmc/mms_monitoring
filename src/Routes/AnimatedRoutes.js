import React, { Suspense } from "react";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PurchaseOrder from "../Pages/PurchaseOrder";
import Category from "../Components/Category";
import SearchPO from "../Pages/SearchPO";
import ChartSample from "../Components/ChartSample";
import ItemCategory from "../Pages/ItemCategory";
import Table from "../Components/TableSample";
import Department from "../Pages/Department";
import DepartmentReport from "../Components/DepartmentReport";
import useAuth from "../Hooks/useAuth";

import PasswordRecovery from "../Pages/PasswordRecovery";
import PageNotFound from "../Pages/404";
import Departments from "../Pages/Deparments";
import Users from "../Pages//Users";
import Dashboard from "../Pages//Dashboard";
import PurchaseRequest from "../Pages//PurchaseRequest";
import PurchaseRequestView from "../Pages/Purchase_Request_View";
import Loading from "../Pages/Loading";
import Register from "../Pages/Register";
import AccountRegistration from "../Pages/Account_Registration";

const LoginPage = React.lazy(() => import("../Pages/Login"));
const MainLayoutPage = React.lazy(() => import("../Pages/Main_Layout"));

const RoutesData = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/po",
    element: <PurchaseOrder />,
  },
  {
    path: "/pr",
    element: <PurchaseRequest />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/departments",
    element: <Departments />,
  },
  {
    path: "/prview",
    element: <PurchaseRequestView />,
  },
  {
    path: "/po/po-report",
    element: <SearchPO />,
  },
  {
    path: "/po/chart",
    element: <ChartSample />,
  },
  {
    path: "/po/items",
    element: <ItemCategory />,
  },
  {
    path: "/po/dept",
    element: <Department />,
  },
  {
    path: "/po/deptreport",
    element: <DepartmentReport />,
  },
  {
    path: "/po/sample",
    element: <Table />,
  },
  {
    path: "/po/category",
    element: <Category />,
  },
  {
    path: "/pr/pr-view",
    element: <PurchaseRequestView />,
  },
];

const ProtectedRoute = ({ user }) => {
  return user === null ? <Navigate to="/login" replace /> : <Outlet />;
};

function AnimatedRoutes() {
  const { user } = useAuth();

  return (
    <AnimatePresence>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route element={<ProtectedRoute user={user} />}>
            <Route
              path="/*"
              exact
              element={
                <MainLayoutPage>
                  {RoutesData.map((item) => {
                    return <Route path={item.path} element={item.element} />;
                  })}
                </MainLayoutPage>
              }
            />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<AccountRegistration />} />
          <Route path="/account-recovery" element={<PasswordRecovery />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
