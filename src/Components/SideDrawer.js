import React from "react";
import {
  Avatar,
  Box,
  Button,
  Center,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Link,
  useDisclosure,
  HStack,
} from "@chakra-ui/react";

import { BiMenu } from "react-icons/bi";
import { BsFillBagCheckFill, BsFillBagPlusFill } from "react-icons/bs";

function SideDrawer(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button colorScheme="teal" onClick={onOpen}>
        <BiMenu />
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bgColor="gray.50">
          <DrawerCloseButton mt={2} />
          <DrawerHeader borderBottomWidth="1px">PR/PO MONITORING</DrawerHeader>

          <DrawerBody p={0} mt={1}>
            <Box p={5} _hover={{ bgColor: "green.100" }}>
              <HStack>
                <BsFillBagPlusFill color="teal" fontSize={25} />
                <Link
                  width="full"
                  _hover={{ textDecoration: "none" }}
                  fontWeight={600}
                >
                  Purchase Request
                </Link>
              </HStack>
            </Box>
            <Box p={5} _hover={{ bgColor: "green.100" }}>
              <HStack>
                <BsFillBagCheckFill color="teal" fontSize={25} />
                <Link
                  width="full"
                  _hover={{ textDecoration: "none" }}
                  fontWeight={600}
                >
                  Purchase Order
                </Link>
              </HStack>
            </Box>

            {/* <Center>
              <Avatar src="https://bit.ly/broken-link" size="2xl" />
            </Center> */}
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button colorScheme="green">Logout</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default SideDrawer;
