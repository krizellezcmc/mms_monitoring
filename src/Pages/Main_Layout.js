import SidebarComponent from "../Components/Sidebar_Comonent";
import PurchaseRequest from "./PurchaseRequest";

const MainLayout = () => {
  return (
    <>
      <SidebarComponent children={<PurchaseRequest />} />
    </>
  );
};

export default MainLayout;
