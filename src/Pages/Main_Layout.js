import PurchaseRequest from "./PurchaseRequest";
import SideDrawer from "../Components/SideDrawer";
import {
  Avatar,
  Button,
  Flex,
  Box,
  Heading,
  Spacer,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Departments from "./Deparments";
import Users from "./Users";
import PurchaseOrder from "./PurchaseOrder";
import Dashboard from "./Dashboard";
import PurchaseRequestView from "./Purchase_Request_View";
import { BiMenu } from "react-icons/bi";
import {
  collapseSidebar,
  toggleSidebar,
  collapsed,
  toggled,
  useProSidebar,
} from "react-pro-sidebar";
import SidebarNavigation from "../Components/Sidebar_Component";

const HeaderComponent = (props) => {
  return (
    <Box w={"100%"} bg={"white"} boxShadow={"md"} zIndex={"59"}>
      <Flex pl={2} pr={10} pt={2} pb={2} columnGap={5} alignItems={"center"}>
        <Button
          bgColor="#fafafa"
          onClick={props.action}
          _hover={{ bgColor: "none" }}
        >
          <BiMenu color="teal" fontSize={22} />
          <Text ml={2} color="teal">
            Menu
          </Text>
        </Button>
        <Spacer />
        <Heading size={"md"}>Tristan Jay Amit</Heading>
        <Avatar size={"md"} src="" name="Tristan" />
      </Flex>
    </Box>
  );
};

const MainLayout = () => {
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken } =
    useProSidebar();

  const actionHandle = () => {
    if (broken) {
      toggleSidebar();
      return;
    }
    collapseSidebar();
  };

  return (
    <Flex>
      <SidebarNavigation collapsed={collapsed} />
      <Spacer />
      <Box w={"100%"} h={"100vh"} bg={"rgba(0,0,0,0.05)"}>
        <HeaderComponent action={actionHandle} />
        <Box w={"100%"} h={"93.4vh"}>
          <Routes>
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/po" element={<PurchaseOrder />} />
            <Route path="/pr" element={<PurchaseRequest />} />
            <Route path="/users" element={<Users />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/prview" element={<PurchaseRequestView />} />
          </Routes>
        </Box>
      </Box>
    </Flex>
  );
};

export default MainLayout;
