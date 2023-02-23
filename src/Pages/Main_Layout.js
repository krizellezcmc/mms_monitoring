import { useState } from "react";
import {
  Avatar,
  Button,
  Flex,
  Box,
  Heading,
  Spacer,
  Text,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import { Routes } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { useProSidebar } from "react-pro-sidebar";
import SidebarNavigation from "../Components/Sidebar_Component";
import { BsPersonCircle } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMdLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { Delete } from "../API/Base_Http_Request";
import { primaryPathUser } from "../API/Path_List";
import StatusHandler from "../Utils/ExceptionHandler";

const LogoutPrompt = () => {
  const { setUser } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleLogout = (e) => {
    e.preventDefault();
    Delete({ url: `${primaryPathUser}/logout` })
      .then((res) => {
        if (!res.statusText === "OK") {
          throw new Error("Bad response", { cause: res });
        }
        console.log(res.data.data);
        sessionStorage.removeItem("Token");
        onClose();
        setUser(null);
      })
      .catch((err) => {
        console.log(StatusHandler(err));
      });
  };

  return (
    <Box>
      <MenuItem icon={<IoMdLogOut />} onClick={onOpen}>
        Logout
      </MenuItem>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalBody>
            <Text>Oh no! You're leaving...</Text>
            <Text>Are you sure?</Text>
          </ModalBody>
          <ModalFooter>
            <Flex columnGap={5} justifyContent="space-around">
              <Button
                bg="teal"
                color="white"
                _hover={{ bg: "teal", color: "white" }}
                _active={{ bg: "teal", color: "white" }}
                onClick={onClose}
              >
                Naah, Just Kidding.
              </Button>
              <Button
                variant="outline"
                colorScheme="teal"
                onClick={(e) => handleLogout(e)}
              >
                Yes, Log Me Out
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

const HeaderComponent = (props) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const redirect = (path) => navigate(path);

  return (
    <Box w={"100%"} bg={"white"} boxShadow={"md"} zIndex={"59"}>
      <Flex
        pl={2}
        pr={[2, 2, 5, 5]}
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
        <Menu size="lg">
          {
            <>
              <MenuButton>
                <Box _hover={{ cursor: "pointer" }}>
                  <Avatar
                    size={["sm", "sm", "md", "md"]}
                    src=""
                    name="Tristan"
                  />
                </Box>
              </MenuButton>
              <MenuList>
                <MenuItem
                  icon={<BsPersonCircle />}
                  onClick={() => redirect("profile")}
                >
                  Profile
                </MenuItem>
                <MenuItem icon={<RiLockPasswordFill />}>
                  Change Password
                </MenuItem>
                <LogoutPrompt />
              </MenuList>
            </>
          }
        </Menu>
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
