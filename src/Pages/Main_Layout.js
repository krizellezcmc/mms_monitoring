import SidebarComponent from "../Components/Sidebar_Comonent";
import PurchaseRequest from "./PurchaseRequest";
import SideDrawer from "../Components/SideDrawer";
import { useDisclosure } from "@chakra-ui";

const MainLayout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <SideDrawer />
      <SidebarComponent children={<PurchaseRequest />} />
    </>
  );
};

export default MainLayout;
