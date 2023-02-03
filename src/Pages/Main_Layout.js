import {
  Avatar,
  Button,
  Flex,
  Box,
  Heading,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { Routes } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { useProSidebar } from "react-pro-sidebar";
import SidebarNavigation from "../Components/Sidebar_Component";

const HeaderComponent = (props) => {
  return (
    <Box w={"100%"} bg={"white"} boxShadow={"md"} zIndex={"59"}>
      <Flex
        pl={2}
        pr={[5, 5, 10, 10]}
        pt={2}
        pb={2}
        columnGap={5}
        alignItems={"center"}
      >
        <Button
          bgColor="#fafafa"
          onClick={props.action}
          _hover={{ bgColor: "none" }}
        >
          <BiMenu color="teal" fontSize={22} />
        </Button>
        <Spacer />
        <Heading size={["sm", "sm", "md", "md"]}>Tristan Jay Amit</Heading>
        <Avatar size={["sm", "sm", "md", "md"]} src="" name="Tristan" />
      </Flex>
    </Box>
  );
};

const MainLayout = ({ children }) => {
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
          <Routes>{children}</Routes>
        </Box>
      </Box>
    </Flex>
  );
};

export default MainLayout;
