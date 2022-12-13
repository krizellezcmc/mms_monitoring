import React from "react";
import {
  Avatar,
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";

import { BiMenu } from "react-icons/bi";

function SideDrawer(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button colorScheme="teal" onClick={onOpen}>
        <BiMenu />
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton mt={2} />
          <DrawerHeader>User Type</DrawerHeader>

          <DrawerBody mt={20}>
            <Center>
              <Avatar src="https://bit.ly/broken-link" size="2xl" />
            </Center>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button colorScheme="blue">Logout</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default SideDrawer;
