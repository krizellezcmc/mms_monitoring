import React from "react";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Link,
  useDisclosure,
  HStack,
  Text,
} from "@chakra-ui/react";

import { BiLogOut, BiLogOutCircle, BiMenu } from "react-icons/bi";
import { BsFillBagCheckFill, BsFillBagPlusFill } from "react-icons/bs";
import { FaUsers, FaBuilding } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { useNavigate } from "react-router";

const MenuItemComponent = (props) => {
  return (
    <Box
      p={5}
      _hover={{ bgColor: "teal.200" }}
      onClick={(e) => props.click(e, props.path)}
    >
      <HStack>
        {props.child}
        <Text width="full" fontWeight={600}>
          {props.title}
        </Text>
      </HStack>
    </Box>
  );
};

function SideDrawer(props) {
  const navigate = useNavigate();

  const handleClick = (e, path) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <>
      <Drawer isOpen={props.isOpen} placement="left" onClose={props.onClose}>
        <DrawerOverlay />
        <DrawerContent bgColor="gray.50">
          <DrawerCloseButton mt={2} border={0} />
          <DrawerHeader borderBottomWidth="1px">
            PR | PO MONITORING
          </DrawerHeader>

          <DrawerBody p={0} mt={1}>
            <MenuItemComponent
              title={"Dashboard"}
              path={"/"}
              child={<MdSpaceDashboard color="teal" fontSize={25} />}
              click={handleClick}
            />
            <MenuItemComponent
              title={"Purchase Request"}
              path={"pr"}
              child={<BsFillBagPlusFill color="teal" fontSize={25} />}
              click={handleClick}
            />
            <MenuItemComponent
              title={"Purchase Order"}
              path={"po"}
              child={<BsFillBagCheckFill color="teal" fontSize={25} />}
              click={handleClick}
            />
            <MenuItemComponent
              title={"Users"}
              path={"users"}
              child={<FaUsers color="teal" fontSize={25} />}
              click={handleClick}
            />
            <MenuItemComponent
              title={"Departments"}
              path={"departments"}
              child={<FaBuilding color="teal" fontSize={25} />}
              click={handleClick}
            />

            {/* <Center>
              <Avatar src="https://bit.ly/broken-link" size="2xl" />
            </Center> */}
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px" display="flex">
            <Button colorScheme="red">
              Logout &nbsp;
              <BiLogOut style={{ transform: "rotate(180deg)" }} />
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default SideDrawer;
